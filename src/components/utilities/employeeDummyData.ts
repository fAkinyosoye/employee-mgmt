type DummyDataType = {
  employeeid: string;
  firstname: string;
  middleinitial: string;
  lastname: string;
  username: string;
  role: string;
  grade: string;
  division: string;
  department: string;
  unit: string;
  location: string;
  accountnumber: string;
  sortcode: string;
  staffStatus: number | string;
  createdDateTime: string;
  createdBy: string | null;
  lastUpdatedDateTime: string;
  lastUpdatedBy: string | null;
  isDeleted: boolean;
};

const dummyData: DummyDataType[] = [
  {
    employeeid: "ZZZWSC547",
    firstname: "Test Amaka",
    middleinitial: "",
    lastname: "Stephanie",
    username: "estephanie",
    role: "Intern",
    grade: "Intern",
    division: "Risk Management",
    department: "Risk Management",
    unit: "Risk Management",
    location: "Lagos",
    accountnumber: "0123456799",
    sortcode: "123456789",
    staffStatus: 0,
    createdDateTime: "0001-01-01T00:00:00+00:00",
    createdBy: null,
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZZTEST",
    firstname: "Test",
    middleinitial: "V",
    lastname: "Test",
    username: "ZZZTEST",
    role: "Application Developer",
    grade: "Senior Banking Officer",
    division: "Operations & Technology",
    department: "Operations & Technology",
    unit: "Operational Excellence",
    location: "Lagos",
    accountnumber: "0075243336",
    sortcode: "232150029",
    staffStatus: "Inactive", // is this a string or boolean field
    createdDateTime: "2022-11-17T18:52:16.929217+01:00",
    createdBy: "Cofoma",
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZSWED",
    firstname: "John",
    middleinitial: "D",
    lastname: "Doe",
    username: "johndoe",
    role: "Maker",
    grade: "SBO",
    division: "OPS",
    department: "OE",
    unit: "OPE",
    location: "Lagos",
    accountnumber: "9876543210",
    sortcode: "98765",
    staffStatus: 0,
    createdDateTime: "0001-01-01T00:00:00+00:00",
    createdBy: null,
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZZWSC547",
    firstname: "Test Amaka",
    middleinitial: "",
    lastname: "Stephanie",
    username: "estephanie",
    role: "Intern",
    grade: "Intern",
    division: "Risk Management",
    department: "Risk Management",
    unit: "Risk Management",
    location: "Lagos",
    accountnumber: "0123456799",
    sortcode: "123456789",
    staffStatus: 0,
    createdDateTime: "0001-01-01T00:00:00+00:00",
    createdBy: null,
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZZTEST",
    firstname: "Test",
    middleinitial: "V",
    lastname: "Test",
    username: "ZZZTEST",
    role: "Application Developer",
    grade: "Senior Banking Officer",
    division: "Operations & Technology",
    department: "Operations & Technology",
    unit: "Operational Excellence",
    location: "Lagos",
    accountnumber: "0075243336",
    sortcode: "232150029",
    staffStatus: "Inactive", // is this a string or boolean field
    createdDateTime: "2022-11-17T18:52:16.929217+01:00",
    createdBy: "Cofoma",
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZSWED",
    firstname: "John",
    middleinitial: "D",
    lastname: "Doe",
    username: "johndoe",
    role: "Maker",
    grade: "SBO",
    division: "OPS",
    department: "OE",
    unit: "OPE",
    location: "Lagos",
    accountnumber: "9876543210",
    sortcode: "98765",
    staffStatus: 0,
    createdDateTime: "0001-01-01T00:00:00+00:00",
    createdBy: null,
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZZWSC547",
    firstname: "Test Amaka",
    middleinitial: "",
    lastname: "Stephanie",
    username: "estephanie",
    role: "Intern",
    grade: "Intern",
    division: "Risk Management",
    department: "Risk Management",
    unit: "Risk Management",
    location: "Lagos",
    accountnumber: "0123456799",
    sortcode: "123456789",
    staffStatus: 0,
    createdDateTime: "0001-01-01T00:00:00+00:00",
    createdBy: null,
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZZTEST",
    firstname: "Test",
    middleinitial: "V",
    lastname: "Test",
    username: "ZZZTEST",
    role: "Application Developer",
    grade: "Senior Banking Officer",
    division: "Operations & Technology",
    department: "Operations & Technology",
    unit: "Operational Excellence",
    location: "Lagos",
    accountnumber: "0075243336",
    sortcode: "232150029",
    staffStatus: "Inactive", // is this a string or boolean field
    createdDateTime: "2022-11-17T18:52:16.929217+01:00",
    createdBy: "Cofoma",
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZSWED",
    firstname: "John",
    middleinitial: "D",
    lastname: "Doe",
    username: "johndoe",
    role: "Maker",
    grade: "SBO",
    division: "OPS",
    department: "OE",
    unit: "OPE",
    location: "Lagos",
    accountnumber: "9876543210",
    sortcode: "98765",
    staffStatus: 0,
    createdDateTime: "0001-01-01T00:00:00+00:00",
    createdBy: null,
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZZWSC547",
    firstname: "Test Amaka",
    middleinitial: "",
    lastname: "Stephanie",
    username: "estephanie",
    role: "Intern",
    grade: "Intern",
    division: "Risk Management",
    department: "Risk Management",
    unit: "Risk Management",
    location: "Lagos",
    accountnumber: "0123456799",
    sortcode: "123456789",
    staffStatus: 0,
    createdDateTime: "0001-01-01T00:00:00+00:00",
    createdBy: null,
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZZTEST",
    firstname: "Test",
    middleinitial: "V",
    lastname: "Test",
    username: "ZZZTEST",
    role: "Application Developer",
    grade: "Senior Banking Officer",
    division: "Operations & Technology",
    department: "Operations & Technology",
    unit: "Operational Excellence",
    location: "Lagos",
    accountnumber: "0075243336",
    sortcode: "232150029",
    staffStatus: "Inactive", // is this a string or boolean field
    createdDateTime: "2022-11-17T18:52:16.929217+01:00",
    createdBy: "Cofoma",
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
  {
    employeeid: "ZZSWED",
    firstname: "John",
    middleinitial: "D",
    lastname: "Doe",
    username: "johndoe",
    role: "Maker",
    grade: "SBO",
    division: "OPS",
    department: "OE",
    unit: "OPE",
    location: "Lagos",
    accountnumber: "9876543210",
    sortcode: "98765",
    staffStatus: 0,
    createdDateTime: "0001-01-01T00:00:00+00:00",
    createdBy: null,
    lastUpdatedDateTime: "0001-01-01T00:00:00+00:00",
    lastUpdatedBy: null,
    isDeleted: false,
  },
];
// const dummyData = [
//   {
//     id: "1",
//     name: "Employee One",
//     email: "employeeone@boi.ng",
//     grade: "Assistant Banking officer",
//     status: "active",
//     phoneNumber: "08139500243",
//   },
//   {
//     id: "2",
//     name: "Employee Two",
//     grade: "Assistant Banking officer",
//     status: "active",
//     phoneNumber: "08139500243",
//   },
//   {
//     id: "3",
//     name: "Employee Three",
//     grade: "Assistant Banking officer",
//     status: "active",
//     phoneNumber: "08139500243",
//   },
// ];

export { dummyData };
