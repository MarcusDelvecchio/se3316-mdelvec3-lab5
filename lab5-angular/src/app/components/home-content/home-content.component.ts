import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { courseObject } from './courseInterface'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class ConfigService {
  private queryString: string = "http://localhost:3000/api/courseData";

  constructor(private http: HttpClient) {}
    getcourses(): Observable<courseObject[]> {
      return this.http.get<courseObject[]>(this.queryString);
    };
    getData(){};
    searchSubmitted(){};
    renderTimeTable(){};
    addCoursesToSchedule(){};
    scheduleSelected(scheduleName: string){};
    createSchedule(){};
    scheduleNameInput;
}

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['../componentStyles.css']
})
export class HomeContentComponent {

  ngOnInit(){
    console.log("on init called");
    // removed until connecting to db
    //this._configservice.getcourses().subscribe(data => this.dataArray = data);
    this.dataArray = [
      {
        "catalog_nbr": "1021B",
        "subject": "ACTURSCI",
        "className": "INTRO TO FINANCIAL SECURE SYS",
        "course_info": [
          {
            "class_nbr": 5538,
            "start_time": "8:30 AM",
            "descrlong": "",
            "end_time": "9:30 AM",
            "campus": "Main",
            "facility_ID": "PAB-106",
            "days": [
              "M",
              "W",
              "F"
            ],
            "instructors": [],
            "class_section": "001",
            "ssr_component": "LEC",
            "enrl_stat": "Not full",
            "descr": "RESTRICTED TO YR 1 STUDENTS."
          }
        ],
        "catalog_description": "The nature and cause of financial security and insecurity; public, private and employer programs and products to reduce financial insecurity, including social security, individual insurance and annuities along with employee pensions and benefits.\n\nExtra Information: 3 lecture hours."
      },
      {
        "catalog_nbr": 2053,
        "subject": "ACTURSCI",
        "className": "MATH FOR FINANCIAL ANALYSIS",
        "course_info": [
          {
            "class_nbr": 1592,
            "start_time": "11:30 AM",
            "descrlong": "Prerequisite(s):1.0 course or two 0.5 courses at the 1000 level or higher from Applied Mathematics, Calculus, or Mathematics.",
            "end_time": "12:30 PM",
            "campus": "Main",
            "facility_ID": "NCB-113",
            "days": [
              "M",
              "W",
              "F"
            ],
            "instructors": [],
            "class_section": "001",
            "ssr_component": "LEC",
            "enrl_stat": "Full",
            "descr": ""
          }
        ],
        "catalog_description": "Simple and compound interest, annuities, amortization, sinking funds, bonds, bond duration, depreciation, capital budgeting, probability, mortality tables, life annuities, life insurance, net premiums and expenses. Cannot be taken for credit in any module in Statistics or Actuarial Science, Financial Modelling or Statistics, other than the minor in Applied Financial Modeling.\n\nAntirequisite(s): Actuarial Science 2553A/B.\n\nExtra Information: 3 lecture hours."
      },
      {
        "catalog_nbr": "2427B",
        "subject": "ACTURSCI",
        "className": "LONG TERM ACTUARIAL MATH I",
        "course_info": [
          {
            "class_nbr": 2663,
            "start_time": "12:30 PM",
            "descrlong": "Prerequisite(s): A minimum mark of 60% in each of Actuarial Science 2553A/B, either Calculus 2402A/B or Calculus 2502A/B, and Statistical Sciences 2857A/B. Restricted to students enrolled in any Actuarial Science module.",
            "end_time": "1:30 PM",
            "campus": "Main",
            "facility_ID": "MC-105B",
            "days": [
              "M",
              "W",
              "F"
            ],
            "instructors": [],
            "class_section": "001",
            "ssr_component": "LEC",
            "enrl_stat": "Not full",
            "descr": ""
          }
        ],
        "catalog_description": "Models for the time until death, single life annuity and life insurance present values and their probability distributions; introduction to equivalence principle and premium calculations.\n\nExtra Information: 3 lecture hours, 1 tutorial hour."
      },
    ];
  };

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
  actvieScheduleName: string;
  selectedCourses: object[] = []; // array of SELECTED courses (full data)
  scheduleData: any = {};
  timeBasedSchedule;
  dataArray;
  newScheduleEnabled; // when the users clicks the button to create new schedule, fields to do so are shown
  scheduleDataInfo; // info object correspondiong to the ScheduleData object with info for each schedule. Format is = { schedule1: { creator: "", modified: "", length: undefined, description: "", }, schedule2: { ... }, ... }
  
  constructor(private _configservice:ConfigService, public auth: AuthService){
    this.showInfoTable = false;
    this.showTimeTable = false;
    this.checked = [];
    this.scheduleNameInput = "";
    this.actvieScheduleName = "";
    this.timeBasedSchedule = {"8:30 AM": {},"9:30 AM": {},"10:30 AM": {},"11:30 AM": {},"12:30 PM": {},"1:30 PM": {},"2:30 PM": {},"3:30 PM": {},"4:30 PM": {},"5:30 PM": {},"6:30 PM": {},"7:30 PM": {},"8:30 PM": {},"9:30 PM": {}};
    this.renderedSchedule = "";
    this.dataArray = [];
    this.newScheduleEnabled = false;""
    this.scheduleDataInfo = {};// note was using this for testing cuz it breaks cuz its not in the scheduleData object but you CAN use it for testing{test1: { creator: "Marcus", modified: "2020-12-3", length: undefined, description: "some description", visiblity: "Private" }};
  }

  getData(){

    let matchingCourses = [];
    let courseData = this.dataArray;

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
      this.getData();
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
    let description: string = (document.getElementById("scheduleDescription") as HTMLInputElement).value;
    let visiblity: string = (document.getElementById("visibilityDropDown") as HTMLInputElement).value;
    
    if(!this.scheduleNameInput){
      alert("Error: schedule name empty");
      return;
    }
    else if(!this.sanitize(name, false)){
      alert("The schedule name cannot contain special characters");
      return;
    }
    else{
      console.log("schedule " + name + " created");
      this.scheduleData[name] = {};

      // todo get modified date and creator from user
      // todo saitize description?
      this.scheduleDataInfo[name] = {creator: "", modified: "", length: undefined, description: description, expanded: false, visibility: visiblity};
    }
    this.scheduleNameInput = "";
    this.newScheduleEnabled =  false; // hide the create schedule options again
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
      this.actvieScheduleName = name;
      //console.log("Active schedule changed to " + name);
    }catch(error){
      console.log("Something went wrong; schedule name cannot be found in data");
    }
  }

  addCoursesToSchedule(){
    
    if(this.actvieScheduleName == null || this.actvieScheduleName == "" || this.actvieScheduleName == undefined){
      alert("Please select a schedule to add courses to it.")
      return;
    }
    let activeSchedule = this.activeSchedule;
    let name = this.actvieScheduleName;

    this.scheduleData[name] = this.selectedCourses;
    console.log(this.scheduleData);
  }


  /* TIME TABLE COMPONENT CODE BELOW
   * 
   */
  
  days = {Monday: "M", Tuesday: "Tu", Wednesday: "W", Thursday: "Th", Friday: "F"};
  times = ["8:30 AM","9:30 AM","10:30 AM","11:30 AM","12:30 PM","1:30 PM","2:30 PM","3:30 PM","4:30 PM","5:30 PM","6:30 PM","7:30 PM","8:30 PM","9:30 PM"];

  renderTimeTable(){

    // removed bc active schedule drop down no longer the method to render schedules/ course lists
    /*if((document.getElementById("scheduleDropDown") as HTMLInputElement).value == "none"){
      alert("You must choose an active schedule to render a time table");
      return;
    }*/

    /*if(this.activeSchedule.length == 0){
      alert("Cannot render an empty schedule");
      return;
    }*/

    this.renderedSchedule = this.actvieScheduleName;
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
    }else{
      this.scheduleDataInfo[name].expanded = true;
    }
  }

  courseListSelected(name: string){
    console.log("schedule name passed:" + name);
    console.log(this.scheduleData);
    this.activeSchedule = this.scheduleData[name];
    console.log(this.activeSchedule);
    this.actvieScheduleName = name;
    this.renderTimeTable();
  }
  
}

/* course list format :

scheduleName: [ { COURSEOBJ1 }, { COURSEOBJ2 }, {COURSEOBJ3}]
// just an array of course objects^

*/

