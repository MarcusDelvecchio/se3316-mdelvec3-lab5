import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// observables from interfaces so we can get from http requests
import { courseObject } from './home-content/courseInterface';
import { scheduleInfo } from './home-content/scheduleInterface';
import { scheduleResponse } from './home-content/scheduleResponseInterface';
import { returnedReviewData } from './home-content/reviewDataInterface';

@Injectable()
export class ConfigService {

  public port = ""; //7000;
  /*
  private GETCourseDataString: string = "http://localhost:" + this.port + "/api/courseData";
  private POSTpublicScheduleDataString: string = "http://localhost:" + this.port + "/api/public/update-data";
  private POSTprivateScheduleDataString: string = "http://localhost:" + this.port + "/api/user/update-data";
  private GETPublicScheduleDataString: string = "http://localhost:" + this.port + "/api/public/scheduleData";
  private GETreviewDataString: string = "http://localhost:" + this.port + "/api/get/reviews";
  private POSTreviewDataString: string = "http://localhost:" + this.port + "/api/reviews";
  */
  // demo routes

  private GETCourseDataString: string = "" + this.port + "/api/courseData";
  private POSTpublicScheduleDataString: string = "" + this.port + "/api/public/update-data";
  private POSTprivateScheduleDataString: string = "" + this.port + "/api/user/update-data";
  private GETPublicScheduleDataString: string = "" + this.port + "/api/public/scheduleData";
  private GETreviewDataString: string = "" + this.port + "/api/get/reviews";
  private POSTreviewDataString: string = "" + this.port + "/api/reviews";

  constructor(private http: HttpClient) {}

    postPublicScheduleData(content): Observable<scheduleInfo[]> {
      return this.http.post<scheduleInfo[]>(this.POSTpublicScheduleDataString, content);
      /* body is in the format body = { scheduleName1: { course1: { COURSE INFO }, course2: { COURSE 2 INFO }, ... }, schedule2: { ... }, ...}*/
    };

    postPrivateScheduleData(content): Observable<scheduleInfo[]> {
      return this.http.post<scheduleInfo[]>(this.POSTprivateScheduleDataString, content);
      /* body is in the format body = { scheduleName1: { course1: { COURSE INFO }, course2: { COURSE 2 INFO }, ... }, schedule2: { ... }, ...}*/
    };
    
    getCourseData(): Observable<courseObject[]> {
      return this.http.get<courseObject[]>(this.GETCourseDataString);
    };

    getPublicScheduleData(): Observable<scheduleResponse[]> {  // observable type any?
      return this.http.get<any[]>(this.GETPublicScheduleDataString);
    };

    getPrivateScheduleData(username): Observable<scheduleResponse[]> {  // observable type any?
      let GETPrivateScheduleDataString: string = "" + this.port + "/api/" + username + "/scheduleData";
      return this.http.get<any[]>(GETPrivateScheduleDataString);
    };

    getReviewData(): Observable<returnedReviewData[]>{
      return this.http.get<returnedReviewData[]>(this.GETreviewDataString);
    }

    postReviewData(data): Observable<returnedReviewData[]>{
      return this.http.post<any[]>(this.POSTreviewDataString, data);
    }
}