// models/Submission.ts

// export interface Submission {
//     id: number;
//     title: string;
//     content: string;
//     author: {
//         id: number;
//         name: string;
//         email: string;
//     };
//     // Add more properties as needed
// }


export type SubmissionData = Submission[]

export interface Submission {
  id: number
  studentNumber: string
  student: Student
  title: string
  abstract: string
  transitionState: number
  submissionDate: string
  academicPeriod: AcademicPeriod
  documents: Document[]
  submissionHistories: SubmissionHistory[]
}

export interface Building {
  id: number
  name: string
  buildingType?: BuildingType
  ownershipType?: OwnershipType
  genderOption?: Gender
  geolocation?: Geolocation
  address: string
  description?: string 
  picture:string,
  reviews:string,
  priceRange:string,
  amenities?: string[]

}

export interface Floor{
  id:number,
  buildingId: number,
  floorNumber: number,
  description: string,
  rooms:Room[]
}

export interface Room{
  id: number,
  roomNumber: number,
  roomType:RoomType
}

export interface RoomType{
  id:number,
  buildingId:number,
  name: string,
  price: number,
  amenities: Ammenity[]
}

export interface Ammenity{
  id:number,
  roomId: number,
  name:string
}

enum BuildingType {
  hostel =1,
  apartment,
  facility 
}

enum OwnershipType{
  public =1 ,
  private
}

enum Gender{
  male = 1,
  female,
  mixed
}

export interface Picture{
  path: string
}

export interface Geolocation {
  longitude: string,
  latitude: string
}



export interface Student {
  studentNumber: string
  indexNumber: string
  yearGroup: YearGroup
  studentStatus: number
  studentType: string
  studentSection: number
  programme: Programme
  party: Party
}

export interface YearGroup {
  admittedYear: number
  classYear: number
  value: number
}

export interface Programme {
  id: number
  name: string
  department: Department
}

export interface Department {
  id: number
  name: string
}

export interface Party {
  name: Name
}

export interface Name {
  firstName: string
  lastName: string
  otherName: string
}

export interface AcademicPeriod {
  academicYear: string
  lowerYear: number
  upperYear: number
  semester: number
}

export interface Document {
  id: number
  submissionId: number
  name: string
  documentType: number
  versions: Version[]
}

export interface Version {
  id: number
  documentId: number
  name: string
  path: string
}

export interface SubmissionHistory {
  id: number
  submissionId: number
  partyId: number
  activity: string
  activityDate: string
}



export interface ReconstructedDataRow {
  id: number;
  studentNumber: string;
  title: string;
}