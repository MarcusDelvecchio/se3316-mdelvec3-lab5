import { Component, OnInit, ɵConsole } from '@angular/core';
import { faLink, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';
import { ConstantPool } from '@angular/compiler';
//import { Headers } from '@angular/common/http'
import { DataService } from '../sharedDataInterface';
import { returnedReviewData } from './reviewDataInterface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ConfigService } from '../dataservice'

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['../componentStyles.css']
})

export class HomeContentComponent {

  faLink = faLink;
  show = true;
  checkboxValue: boolean = false;
  scheduleNameInput: string; // initalizing to "" will cause errors: schedules will never have names
  showInfoTable = false; // info table is rendered only when this is true
  showTimeTable = false; // time table is rendered only when this is true
  renderedSchedule;
  columnLabels = ["Subject", "Course Number", "Class Name", "Section", "Component", "Class Times"]; //todo add course_info columns
  data: { [key: string]: any } = {};
  checked: boolean[] = [];
  objectKeys = Object.keys;
  activeSchedule: object[] = []; // giving errors
  activeScheduleName: string;
  selectedCourses: object[] = []; // array of SELECTED courses (full data)
  scheduleData: any = {};
  timeBasedSchedule;
  dataArray;
  newScheduleEnabled; // when the users clicks the button to create new schedule, fields to do so are shown
  scheduleDataInfo; // info object correspondiong to the ScheduleData object with info for each schedule. Format is = { schedule1: { creator: "", modified: "", length: undefined, description: "", }, schedule2: { ... }, ... }
  editingCourseList; // if true shows the optoins to edit a course list so the user can edit
  cannotRenderEmpty; // true if the course selected from the list is empty so a message is displayed instead of an empty time table
  showEditButton; // set to true when a course is selected from the list so the edit button appears
  port;
  profile = null; // user profile data (set on ngOnInit) -> promise recieved from user data
  showCourseReviewSection;
  showCourseReviewListSection;
  reviewData;               // object containing course review data, rewritten to db evey time a new review is created format: reviewData = [ { courseNum: number, review: string, creator: string, hidden: boolean }, { ... } , { ... } ]
  reviewId;   // number set equal to number of reviews in db so that unique id can be given to every course review

  constructor(private _configservice:ConfigService, public auth: AuthService, public dataService: DataService){
    this.showInfoTable = false;
    this.showTimeTable = false;
    this.checked = [];
    this.scheduleNameInput = "";
    this.activeScheduleName = "";
    this.timeBasedSchedule = {"8:30 AM": {},"9:30 AM": {},"10:30 AM": {},"11:30 AM": {},"12:30 PM": {},"1:30 PM": {},"2:30 PM": {},"3:30 PM": {},"4:30 PM": {},"5:30 PM": {},"6:30 PM": {},"7:30 PM": {},"8:30 PM": {},"9:30 PM": {}};
    this.renderedSchedule = "";
    this.dataArray = [];
    this.newScheduleEnabled = false;""
    this.scheduleDataInfo = {};// note was using this for testing cuz it breaks cuz its not in the scheduleData object but you CAN use it for testing{test1: { creator: "Marcus", modified: "2020-12-3", length: undefined, description: "some description", visiblity: "Private" }};
    this.cannotRenderEmpty = false;
    this.port = 7000; // breaks --> || process.env.API_PORT;
  }

  // populated time table after search is submitted
  renderTableData(){

    let matchingCourses = [];
    let courseData = this.dataArray;  // this.dataArry hard coded in ngOninit but get from db todo

    // getting search parameters
      
      let selectedComponent = (document.getElementById("componentDropdown") as HTMLInputElement).value;
      let courseId = (document.getElementById("courseNumber") as HTMLInputElement).value;
      let subjectInput = (document.getElementById("subjectDropDown") as HTMLInputElement).value;  
      let subjCourseKeywords = (document.getElementById("subj-course-keyword") as HTMLInputElement).value;
      let keywords = (document.getElementById("keywords") as HTMLInputElement).value;

    // check if any keywords entered, if so prioritize them first
      
      if(keywords != undefined && subjCourseKeywords != " " && subjCourseKeywords != null){

        if(keywords.length < 4){
          alert("Search by keywords must have at least 4 characters")
          this.data = matchingCourses; 
          return;
        }
        let keywordsArray = keywords.split(" ");
        console.log(keywordsArray);

        // loop through and search all courses for matching keywords
        for(let keyword of keywordsArray){
            courseloop: for(let course of courseData){
              for(let property of Object.keys(course)){
                
                if(property == "course_info"){
        
                  for(let subProperty of Object.keys(course["course_info"][0])){  //not why tf does it break without object.keys
                    
                    if(course["course_info"][0][subProperty].toString().includes(keyword)){
                      console.log("Match:" + subProperty + " " + keyword);
                      matchingCourses.push(course);
                      continue courseloop;
                    }
                  }
                }else if(course[property].toString().includes(keyword)){ // if not course_ info
                  console.log("Match:" + property + " " + keyword);
                  matchingCourses.push(course);
                  continue courseloop;
                }
              }
            }
        }
        console.log("keyword search provided, overriding other searches");
          this.data = matchingCourses; 
          
          if(matchingCourses.length == 0){
            alert("No courses match inputted search fields");
          }
          return;
      }

    // next check if check if subject/ course code keywords entered, prioritize them next
    
      if(subjCourseKeywords != undefined && subjCourseKeywords != " " && subjCourseKeywords != null){
        let keywordsArray2 = subjCourseKeywords.split(" ");
        
        for(let course of courseData){
          for(let keyword of keywordsArray2){
            
            // check if first letter of string is number if so we know it is a course code
            if(this.isNumber(keyword[0])){

              // check if letter is specified at the end
                if(!this.isNumber(keyword[keyword.length -1])){
                  console.log("last value NOT number");
                  
                  // create new string with uppercase letter
                  let newString;
                  newString = keyword.substring(0, keyword.length -1) + keyword.substring(keyword.length -1).toUpperCase();
                  console.log("NEW STRING: "+ newString)

                  // check data for match
                  if(course["catalog_nbr"] == newString){
                    matchingCourses.push(course);
                    console.log(course["catalog_nbr"] + " added to search results");
                  }
                }else{
                  alert("A component suffix must be included in course codes (ex. 3316b or 3316B instead of 3316");
                  return;
                }
            }else if(course["subject"] == keyword){ // if not a course code, it must be a subject, so compare to course subject
              matchingCourses.push(course);
              console.log(course["catalog_nbr"] + " added to search results");
            }
          }
        }
        console.log("subject and/or course code keyword search provided, overriding other searches");
        this.data = matchingCourses; 
        
        if(matchingCourses.length == 0){
          alert("No courses match inputted search fields");
        }
        return;
      }

    /* validate that input requirements are fulfilled 
      
      if(subjectInput == ""){
        alert("Please select a specific subject to search");
      }

      if(!courseId){
        alert("A course ID must be inputted to search");
      }
    */

    // more input validation
      
      if(courseId.length > 5){
        alert("No course ID is longer than 5 characters");
        (document.getElementById("courseNumber") as HTMLInputElement).value = "";
        return;
      }
      if(!this.sanitize(courseId, true)){
        alert("Course codes contain only characters and numbers");
        return;
      }

    // find courses matching search params 
      
      for(let course of courseData){

        if(selectedComponent == "ALL"){
          
          // todo chop last letter of course code if ALL is enabled? 
            //if(/* last character is letter*/)

            // let cutSearchCourseId = (course.catalog_nbr).toString().substring(0, course.catalog_nbr.length - 1);
            // let cutInputtedCourseId =          
          
          if(subjectInput === course.subject && (courseId == course.catalog_nbr || course.catalog_nbr.toString().includes(courseId))){
            matchingCourses.push(course);
          }
        }
        else{
          if(subjectInput === course.subject &&  (courseId == course.catalog_nbr || course.catalog_nbr.toString().includes(courseId)) && selectedComponent === course.course_info[0].ssr_component){
            matchingCourses.push(course);
          }
        }
      }

    // verify some courses matched, if not alert user
      
      if(matchingCourses.length == 0){
        alert("No courses match inputted search fields");
      }
      else{
        console.log(matchingCourses);
      }

    // pass data to data member to be rendered in table
      this.data = matchingCourses;  
  }

  isNumber(str: string): boolean{
    if(str == "1" || str == "2" ||str == "3" ||str == "4" ||str == "5" ||str == "6" ||str == "7" ||str == "8" ||str == "9"){
      return true;
    }
    else{
      return false;
    }
  }

  searchSubmitted(){
    // getting dummy data but should be making http request
      this.renderTableData();
      this.showInfoTable = true;
    
    // delete all this?
      // passing data (js object) to be rendered to table
        //let tableCourses = this.renderInfoTable(this.data);

      // todo after implimenting data fetch make seperate method for rendering table data?
        //this.renderInfoTable(tableCourses);
  }

  // delete?
  renderInfoTable(jsData: any){
    this.showInfoTable = true;
  }

  createSchedule(){
    let name: string = this.scheduleNameInput;

    // if(!this.profile){                // impliment this?broken rn can't test
    //   let user = this.profile.name
    // }
    
    let description: string = (document.getElementById("scheduleDescription") as HTMLInputElement).value;
    let visiblity: string = (document.getElementById("visibilityDropDown") as HTMLInputElement).value;
    let currentTime = new Date();
    console.log("visibility: " + visiblity );
    
    if(!this.scheduleNameInput){
      alert("Error: schedule name empty");
      return;
    }
    else if(!this.sanitize(name, false)){
      alert("The schedule name cannot contain special characters");
      return;
    }
    else{
      console.log("schedule " + name + " created by user" + this.profile.name);
      this.scheduleData[name] = {};
      console.log(this.scheduleData);

      // todo get modified date and creator from user
      // todo saitize description?
      this.scheduleDataInfo[name] = { creator: this.profile.name, modified: currentTime, length: 0, description: description, expanded: false, visibility: visiblity};
    }
    this.scheduleNameInput = "";
    this.newScheduleEnabled =  false; // hide the create schedule options again

    // update the database with the newly created schedule
      this.updateDb();
  }

  courseSelected(course: object){ 

    let checked = course["checked"];

    if(checked){
      // push the course object to the array of active courses
        this.selectedCourses.push(course);
        console.log(this.selectedCourses);
    }
    else{
      for(let schedule in this.selectedCourses){
        if(this.selectedCourses[schedule] == course){
          
          // find index and splice (remove and shift)
            const index = this.selectedCourses.indexOf(this.selectedCourses[schedule], 0);
            if (index > -1) {
              this.selectedCourses.splice(index, 1);
            }
        
          console.log("course removed from selected courses");
          console.log(this.selectedCourses);
        }
      }
    }
  }

  scheduleSelected(scheduleName: string){
    let name = scheduleName;

    try{
      this.activeSchedule = this.scheduleData[name];
      this.activeScheduleName = name;
      console.log("Active schedule changed to " + name);
    }catch(error){
      console.log("Something went wrong; schedule name cannot be found in data");
    }
  }

  addCoursesToSchedule(){
    
    if(this.activeScheduleName == null || this.activeScheduleName == "" || this.activeScheduleName == undefined){
      alert("Please select a schedule to add courses to it.")
      return;
    }

    // check if user is logged in
      if(!this.profile){
        alert("you must sign in to access this functionality");
        return;
      }

    // check that course list belongs to that user
      if(this.scheduleDataInfo[this.activeScheduleName].creator != this.profile.name){
        alert("you cannot edit a schedule that you did not create");
        return;
      }

    let activeSchedule = this.activeSchedule;
    let name = this.activeScheduleName;
    let numberOfCourses = this.selectedCourses.length;
    console.log("courses being added = " + numberOfCourses)

    // add selected courses to schedule
      this.scheduleData[name] = this.selectedCourses;

    // set new modified date and length for schedule info
    // TODO get modified date format 
      this.scheduleDataInfo[name].length = numberOfCourses;
      this.scheduleDataInfo[name].modified = new Date();
    
    console.log(this.scheduleData);
    this.updateDb()
  }

  orderByDate(a: any, b: any){
    let a_dateString = a.value.modified
    let b_dateString = b.value.modified
    let a_date = new Date(a_dateString);
    let b_date = new Date(b_dateString);
    let aTIME = a_date.getTime();
    let bTIME = b_date.getTime();

    // order by decending date (epoc time)
    return aTIME > bTIME ? -1 : (bTIME > aTIME ? 1 : 0);
  }

  getDisplayDate(date: string): string{
    let newDate = new Date(date);
    return newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + "-" + (newDate.getHours() +1) +":"+ (newDate.getMinutes() +1)
  }


  /* TIME TABLE COMPONENT CODE BELOW
   * 
   */
  
  days = {Monday: "M", Tuesday: "Tu", Wednesday: "W", Thursday: "Th", Friday: "F"};
  times = ["8:30 AM","9:30 AM","10:30 AM","11:30 AM","12:30 PM","1:30 PM","2:30 PM","3:30 PM","4:30 PM","5:30 PM","6:30 PM","7:30 PM","8:30 PM","9:30 PM"];

  renderTimeTable(){

    if(this.activeScheduleName == undefined || this.activeScheduleName == "" || this.activeScheduleName == null){
      alert("Select a schedule from the drop down or click one in the schedule list to render it");
      return;
    }

    this.renderedSchedule = this.activeScheduleName;

    /*convert activeSchedule (array of objects) to organized object of format:
    timeBasedSchedule = {
      "8:30 AM": { monday: COURSE_NAME1, tuesday: COURSE_NAME2, wednesday: {}, ...}
      "9:30 AM": ...
    }
    */

    // schedule object we will be filling in
    let organizedSchedule = {"8:30 AM": {},"9:30 AM": {},"10:30 AM": {},"11:30 AM": {},"12:30 PM": {},"1:30 PM": {},"2:30 PM": {},"3:30 PM": {},"4:30 PM": {},"5:30 PM": {},"6:30 PM": {},"7:30 PM": {},"8:30 PM": {},"9:30 PM": {}};

    // loop through active schedule data and add
    for(let course of this.activeSchedule){

      let startTime = course["course_info"][0]["start_time"];
      let endTime = course["course_info"][0]["end_time"];
      let name = course["className"];
      let daysArray = course["course_info"][0]["days"]; // array
      let info = course["catalog_nbr"] + "\n" + name + ": " + course["course_info"][0]["ssr_component"]; 

      // check if course is longer than one hour
        let duration = (endTime.charAt(0) - startTime.charAt(0));
        //console.log("startTime: " + startTime.charAt(0) + " endTime: "+  endTime.charAt(0) + " duration: " + duration);


      // add course into to object's day slots
      for(let day in this.days){

        if(daysArray.includes(this.days[day])){  // this.day[days] is "M", "Tu", "W", ...

            // check if another course in the schedule has written info to this time slot, if so there is conflict
            if(organizedSchedule[startTime][day] == undefined ){
              organizedSchedule[startTime][day] = info;
            }else{
              organizedSchedule[startTime][day] += "CONFLICT W/ " + course["catalog_nbr"];
            }

          // if the course is longer than an hour - removed; not enough time
          /*
          if(duration >1){
            console.log("duration greatee than 1");
            let times;

            // copy current start time to time array (instead of checking if AM or PM)
            for(var i = 0; i< duration-1; i++){
              times[i].push(startTime);
              console.log(times[i]);
            }

            // adds 1 hour to start time and adds to array for however many hours more
            for(var i = 0; i< duration-1; i++){
              let startTime = times[i]
              let newTime = startTime.charAt(0) + 1;
              times[i] = newTime;
            }

            for(var i = 0; i< times.length; i++){
              if(organizedSchedule[times[i]][day] == undefined ){
                organizedSchedule[startTime][day] = info;
              }else{
                organizedSchedule[times[i]][day] += "CONFLICT W/ " + course["catalog_nbr"];
              }
            }
          }*/

        }else{
          organizedSchedule[startTime][day] = "";
        }        
      }
      //todo impliment courses that are longer than an hour?
    }

    // fill rest of the empty time slots  with blanks
      for(var time of Object.keys(organizedSchedule)){

        if(Object.keys(organizedSchedule[time]).length === 0){
          for(var day in this.days){
            organizedSchedule[time][day] = "";
          }
        }
      };

    // note tuesday in days array is 'Tu'
    //console.log(organizedSchedule);

    this.showTimeTable = true;
    this.timeBasedSchedule = organizedSchedule;
    //console.log(this.timeBasedSchedule);
  }

  keepOrder = (a, b) => {
    return a;
  }

  showMoreCourseInfo(course: any){
    let courseNum = course["catalog_nbr"];

    if(course.showMoreInfo){

      for(let element in this.data){
        if(courseNum == this.data[element]["catalog_nbr"]){
          this.data[element]["showMoreInfo"] = false;
        }
      }
    }else{
    
      for(let element in this.data){
        if(courseNum == this.data[element]["catalog_nbr"]){
          this.data[element]["showMoreInfo"] = true;
        } 
      }
    }
  }

  // returns true if the passed string contains only characters, numbers, spaces and underscores
    sanitize(input: string, isCourseCode: boolean): boolean {
      let expressionAllowSpaces = new RegExp('^[a-zA-Z0-9 _]{0,15}$'); 
      let expressionNoSpaces = new RegExp('^[a-zA-Z0-9]{0,15}$'); 
      let newExpression = new RegExp("[<\"\/>%\$&#@\[\\\^\$\.\|\?\*\+\(\)\{\}]");

      if(!isCourseCode){
        if(newExpression.test(input)){
          return false;
        }else{
          return true;
        }
      }else{
        if(expressionNoSpaces.test(input)){
          return true;
        }else{
          return false;
        }
      }
    };

  // display fields to create new scedule
  toggleNewScheduleFields(){
    if(this.newScheduleEnabled){
      this.newScheduleEnabled =  false;
    }else{
      this.newScheduleEnabled = true;
    }
  }

  showMoreCourseListInfo(listName: string){
    let name = listName;

    if(this.scheduleDataInfo[name].expanded){
      this.scheduleDataInfo[name].expanded = false;
      this.showCourseReviewSection = false; // also minimize course review section
    }else{
      this.scheduleDataInfo[name].expanded = true;
    }
  }

  courseListSelected(name: string){
    if(Object.keys(this.scheduleData[name]).length == 0){
      console.log("active schedule set to" + name);
      this.showEditButton = true;
      this.cannotRenderEmpty = true;
      this.renderedSchedule = name;
      this.activeScheduleName = name;
      return;
    }
    this.showEditButton = true;
    this.cannotRenderEmpty = false;
    this.activeSchedule = this.scheduleData[name];
    console.log(this.activeSchedule);
    this.activeScheduleName = name;
    this.renderTimeTable();
  }

  deleteCourseList(name:string){
    delete this.scheduleData[name];
    delete this.scheduleDataInfo[name];
    this.activeSchedule = undefined;
    this.activeScheduleName = undefined;
    this.showTimeTable = false;
    this.editingCourseList = false;
    this.showEditButton = false;
    console.log(this.scheduleData);
    //todo write to database to delete
  }

  toggleEditCourseList(){
    // console.log(this.scheduleDataInfo[this.activeScheduleName].creator);
    // console.log(this.profile.name);

    // check if user is logged in
      if(!this.profile){
        alert("you must sign in to access this functionality");
        return;
      }
  
    // check that course list belongs to that user
      if(this.scheduleDataInfo[this.activeScheduleName].creator != this.profile.name){
        alert("you cannot edit a schedule that you did not create");
        return;
      }

    if(this.editingCourseList){
      this.editingCourseList = false;
    }else{
      this.editingCourseList = true;
    }
  }

  editCourseList(){
    let newName = (document.getElementById("editNameValue") as HTMLInputElement).value;
    let newDesc = (document.getElementById("editScheduleDescription") as HTMLInputElement).value;
    let newVisibility = (document.getElementById("editVisibilityDropDown") as HTMLInputElement).value;

    var newScheduleDataInfoObject = {};

    // if nothing has chnaged

      if(newName == this.activeScheduleName && newDesc == this.scheduleDataInfo[this.activeScheduleName].description && newVisibility == this.scheduleDataInfo[this.activeScheduleName].visibility){
        this.editingCourseList = false;
        return;
      }
      
    // else, something has changed

      // check if description changed

        if(newDesc != this.scheduleDataInfo[this.activeScheduleName].description){
          newScheduleDataInfoObject["description"] = newDesc;
        }else{
          newScheduleDataInfoObject["description"] = this.scheduleDataInfo[this.activeScheduleName].description;
        }

      // check if visibility changed

        if(newVisibility != this.scheduleDataInfo[this.activeScheduleName].visibility){
          newScheduleDataInfoObject["visibility"] = newVisibility;
        }else{
          newScheduleDataInfoObject["visibility"] = this.scheduleDataInfo[this.activeScheduleName].visibility;
        }
      
      // update/reset the modified date and creator
        newScheduleDataInfoObject["modified"] = new Date();
        newScheduleDataInfoObject["creator"] = this.profile.name;

      // and last but not least set the new object to the one we've created and delete the old one

        if(newName != this.activeScheduleName){

          // replace old info object with new one
            this.scheduleDataInfo[newName] = newScheduleDataInfoObject; 
            delete this.scheduleDataInfo[this.activeScheduleName];
            
          // replace it in object with course data
            this.scheduleData[newName] = this.scheduleData[this.activeScheduleName];
            delete this.scheduleData[this.activeScheduleName]; 

          // set the active schedule to the new one
          this.activeScheduleName = newName;
          this.activeSchedule = this.scheduleData[newName];

        }else{  // if the name HASNT been changed, simply just replace the existing object with the new one. Nothing changes in the course data object though
          this.scheduleDataInfo[this.activeScheduleName] = newScheduleDataInfoObject;
        }
      this.updateDb();
      console.log("schedule updated");
      this.editingCourseList = false;
  }

  removeCourseFromList(courseList: string, catalogNumber: string){

  // check if user is logged in
    if(!this.profile){
      alert("you must sign in to access this functionality");
      return;
    }

  // check that course list belongs to that user
    if(!this.scheduleDataInfo[courseList].creator != this.profile.user){
      alert("you cannot edit a schedule that you did not create");
      return;
    }

    console.log(courseList);
    console.log(catalogNumber);
    for(let i = 0; i< Object.keys(this.scheduleData[courseList]).length; i++){
      if(this.scheduleData[courseList][i]["catalog_nbr"] == catalogNumber){
        console.log(this.scheduleData[courseList][i]);  
        this.scheduleDataInfo[courseList].length--;
        this.selectedCourses.splice(i, 1);
      }
    }
    this.updateDb()
  }

  // update user data in database
  updateDb(){
    
    if(!this.profile){
      alert("you must sign in to access this functionality");
      return;
    }
    let user = this.profile.name
    
    // data to be sent to db

      let privateScheduleData = {
        scheduleData: {},
        scheduleDataInfo: {}
      };
      let publicScheduleData = {
        scheduleData: {},
        scheduleDataInfo: {}
      };

    // log
      console.log("scheduleData being posted:");
      console.log(this.scheduleData);

    // creating public and private course list data to send in request

      for(let i = 0; i<Object.keys(this.scheduleDataInfo).length; i++/*let courseList of this.scheduleDataInfo*/){

        // if private, add course to privateScheduleData{}

          if(this.scheduleDataInfo[Object.keys(this.scheduleDataInfo)[i]].visibility == "Private"){

            // setting schedule data
            privateScheduleData["scheduleData"][Object.keys(this.scheduleDataInfo)[i]] = this.scheduleData[Object.keys(this.scheduleDataInfo)[i]];
            
            // setting corresponding schedule data INFO
            privateScheduleData["scheduleDataInfo"][Object.keys(this.scheduleDataInfo)[i]] = this.scheduleDataInfo[Object.keys(this.scheduleDataInfo)[i]];
          }

        // else if, add course to publicScheduleData{}

          else if(this.scheduleDataInfo[Object.keys(this.scheduleDataInfo)[i]].visibility == "Public"){

            // setting schedule data
            publicScheduleData["scheduleData"][Object.keys(this.scheduleDataInfo)[i]] = this.scheduleData[Object.keys(this.scheduleDataInfo)[i]];

            // setting corresponding schedule data INFO 
            publicScheduleData["scheduleDataInfo"][Object.keys(this.scheduleDataInfo)[i]] = this.scheduleDataInfo[Object.keys(this.scheduleDataInfo)[i]];
          }
          else{
            console.log("ERROR COURSE LIST VISIBILITY NOT SET");
          }
      }
    // setting username in body. This is deleted in API before posting

      publicScheduleData["user"] = user;
      privateScheduleData["user"] = user;

    // post to public db
      
      this._configservice.postPublicScheduleData(publicScheduleData).subscribe();

    // post to private db

      this._configservice.postPrivateScheduleData(privateScheduleData).subscribe();

    // log
      console.log("db updated");
  }

  createCourseReviewtoggle(){
    
    if(this.showCourseReviewSection){
      this.showCourseReviewSection = false;
    }
    else{
      if(!this.profile){
        alert("you must sign in to access this functionality");
        return;
      }
      this.showCourseReviewSection = true;
    }
  }

  toggleShowReviews(){

    if(this.showCourseReviewListSection){
      this.showCourseReviewListSection = false;
    }
    else{

      // get the review data from db before showing
      this.getReviewData();

      this.showCourseReviewListSection = true;
    }
  }

  submitCourseReview(course: string){

    let review = (document.getElementById("courseReview") as HTMLInputElement).value;

    // todo clean up review text

    // todo sanitize review

    // get the course id
    let classNum = course["course_info"][0]["class_nbr"];

    let reviewObject = { courseNum: classNum, reviewContent: review, creator: this.profile.name, hidden: false, Id: this.reviewId};
    console.log(this.reviewData);
    this.reviewData.push(reviewObject);

    this.showCourseReviewListSection = false;
    this.postReviewData();
    //this.getReviewData();
    console.log(this.reviewData);
    alert("review submitted") 
  }

  getManagers(){
    let x = this.dataService.getManagers();
    console.log(x);
  }

  postReviewData(){
    this._configservice.postReviewData(this.reviewData).subscribe(data => {
     
     this.reviewData = data;
     this.reviewData= this.reviewData.reviewData;
     console.log("(response) updated data:");
     this.reviewId = this.reviewData.length -1;
    });

  }

  getReviewData(){
    this._configservice.getReviewData().subscribe(data => {
      console.log(data);
      this.reviewData = data[data.length -1]["reviewData"];
      this.reviewId = data.length -1;
      console.log("(getReviewData() response) recieved review data:");
      console.log(this.reviewData);
    });
  }

  ngOnInit(){

    // get user data
    this.auth.user$.subscribe(
      (profile) => { 
        let profileJson = JSON.stringify(profile, null, 2);
        this.profile = JSON.parse(profileJson);
        console.log(this.profile)
    });

    // getting course data to populate tables with

    this._configservice.getCourseData().subscribe(data => {
      this.dataArray = data;
      console.log("course data recieved");
    });
    

    // getting review data
    this.getReviewData();
    /*this._configservice.getReviewData().subscribe(data => {
      this.reviewData = data;
      console.log("(getReviewData() response) recieved review data:");
      console.log(this.reviewData);
    });*/
   
    // getting PUBLIC schedule data from backend

        this._configservice.getPublicScheduleData().subscribe( (data)  => {
          console.log(data);

          /* (data) is in the format:
          *    data = {
          *      scheduleDataInfo: { {...}, {...}, {...}, ...}
          *      scheduleData: { {...}, {...}, {...}, ...}
          *    }                                                   */
          
          // add to scheduleDataInfo array from scheduleDataInfo (property that's value is the object) in the returned data
          for(let key of Object.keys(data)){

            // add scheduleDataInfo from returned data to our schedule data info
              if(key == "scheduleDataInfo"){
                for(let i = 0; i< Object.keys(data[key]).length; i++){
                  this.scheduleDataInfo[Object.keys(data[key])[i]] = data["scheduleDataInfo"][Object.keys(data["scheduleDataInfo"])[i]]; 
                  // this.scheduleDataInfo[ SCHEDULE NAME ] = collectionItem["scheduleDataInfo"] VALUE
                }
              }

            // add scheduleData from returned data to our schedule data 
            
              else if(key == "scheduleData"){
                for(let i = 0; i< Object.keys(data[key]).length; i++){
                  this.scheduleData[Object.keys(data[key])[i]] = data["scheduleData"][Object.keys(data["scheduleData"])[i]]; 
                  // this.scheduleData[ SCHEDULE NAME ] = collectionItem["scheduleData"] VALUE
                }
              }

              else{
                console.log("something broked returned data has more than scheduleDataInfo and scheduleData properties");
              }
            }
          // setting all courses expanded to false
          for(let courseList of Object.keys(this.scheduleDataInfo)){
            this.scheduleDataInfo[courseList].expanded = false;
          }
        });

      // get administrator

      // get PRIVATE (user specific) schedule info from backend 

          // check if user is logged in first 
            if(!this.profile){
              return;
            }

      
          this._configservice.getPrivateScheduleData(this.profile.name).subscribe( (data)  => {
            console.log(data);
      
            /* (data) is in the format:
            *    data = {
            *      scheduleDataInfo: { {...}, {...}, {...}, ...}
            *      scheduleData: { {...}, {...}, {...}, ...}
            *    }                                                   */
            
            // add to scheduleDataInfo array from scheduleDataInfo (property that's value is the object) in the returned data
            for(let key of Object.keys(data)){
      
              // add scheduleDataInfo from returned data to our schedule data info
                if(key == "scheduleDataInfo"){
                  for(let i = 0; i< Object.keys(data[key]).length; i++){
                    this.scheduleDataInfo[Object.keys(data[key])[i]] = data["scheduleDataInfo"][Object.keys(data["scheduleDataInfo"])[i]]; 
                    // this.scheduleDataInfo[ SCHEDULE NAME ] = collectionItem["scheduleDataInfo"] VALUE
                  }
                }
      
              // add scheduleData from returned data to our schedule data 
              
                else if(key == "scheduleData"){
                  for(let i = 0; i< Object.keys(data[key]).length; i++){
                    this.scheduleData[Object.keys(data[key])[i]] = data["scheduleData"][Object.keys(data["scheduleData"])[i]]; 
                    // this.scheduleData[ SCHEDULE NAME ] = collectionItem["scheduleData"] VALUE
                  }
                }
      
                else{
                  console.log("something broked returned data has more than scheduleDataInfo and scheduleData properties");
                }
            }
            // setting all courses expanded to false
            for(let courseList of Object.keys(this.scheduleDataInfo)){
              this.scheduleDataInfo[courseList].expanded = false;
            }
          });
      // console.log(this.scheduleDataInfo);
      // console.log(this.scheduleData);
  };
}

/* rule to add to auth0 to force email verification (removed bc using random email accounts)

function (user, context, callback) {
  if (!user.email_verified) {
    return callback(new UnauthorizedError('Please verify your email before logging in.'));
  } else {
    return callback(null, user, context);
  }
}

*/