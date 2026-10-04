// Mock Data for HomeLoan Assist - High-fidelity Financial Advisory Platform

export const INITIAL_LEADS = [
  {
    id: "HL1001",
    name: "Rahul Kumar",
    mobile: "+91 98351 44121",
    email: "rahul.kumar.pat@gmail.com",
    city: "Patna",
    employment: "Salaried",
    income: 65000,
    loanAmount: 3500000,
    existingEmi: 8000,
    loanType: "Home Purchase Loan",
    propertyType: "3BHK Apartment, Bailey Road",
    status: "New",
    date: "2026-10-04",
    time: "10:30 AM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Customer submitted enquiry from website hero form. Looking for SBI regular home loan.", date: "2026-10-04 10:30 AM", author: "System" }
    ],
    timeline: [
      { stage: "Enquiry Submitted", date: "04 Oct, 10:30 AM", completed: true },
      { stage: "Lead Assigned to Vikram", date: "04 Oct, 10:35 AM", completed: true },
      { stage: "First Contact Call", date: "Pending", completed: false },
      { stage: "Eligibility Verified", date: "Pending", completed: false }
    ]
  },
  {
    id: "HL1002",
    name: "Priya Singh",
    mobile: "+91 97712 88444",
    email: "priya.singh88@yahoo.com",
    city: "Siwan",
    employment: "Business Owner",
    income: 90000,
    loanAmount: 5000000,
    existingEmi: 12000,
    loanType: "Home Construction Loan",
    propertyType: "Residential Plot, Mairwa Road",
    status: "Contacted",
    date: "2026-10-03",
    time: "02:15 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Spoke regarding plot construction loan. 3 years ITR available with ₹9.8L net profit. Requested site map copy.", date: "2026-10-03 04:00 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry Submitted", date: "03 Oct, 02:15 PM", completed: true },
      { stage: "Lead Assigned", date: "03 Oct, 02:20 PM", completed: true },
      { stage: "Customer Contacted", date: "03 Oct, 04:00 PM", completed: true },
      { stage: "Documents Collection", date: "Scheduled 05 Oct", completed: false }
    ]
  },
  {
    id: "HL1003",
    name: "Aman Verma",
    mobile: "+91 99340 77172",
    email: "aman.verma.tech@outlook.com",
    city: "Muzaffarpur",
    employment: "Salaried",
    income: 52000,
    loanAmount: 2800000,
    existingEmi: 0,
    loanType: "Home Purchase Loan",
    propertyType: "Builder Floor, Mithanpura",
    status: "Follow-up",
    date: "2026-10-02",
    time: "11:45 AM",
    assignedTo: "Anjali Sinha",
    notes: [
      { id: 1, text: "Customer works at TCS remote. Credit score is 782. Ready with 6 months salary slips and Form 16.", date: "2026-10-02 03:30 PM", author: "Anjali Sinha" },
      { id: 2, text: "Customer evaluating between 20 yrs and 25 yrs tenure. Sent EMI comparison table.", date: "2026-10-03 11:00 AM", author: "Anjali Sinha" }
    ],
    timeline: [
      { stage: "Enquiry Submitted", date: "02 Oct, 11:45 AM", completed: true },
      { stage: "Customer Contacted", date: "02 Oct, 03:30 PM", completed: true },
      { stage: "Follow-up Call Scheduled", date: "05 Oct, 11:00 AM", completed: true },
      { stage: "Bank Application", date: "Pending", completed: false }
    ]
  },
  {
    id: "HL1004",
    name: "Dr. Neha Sharma",
    mobile: "+91 96081 22915",
    email: "dr.neha.sharma.gaya@gmail.com",
    city: "Gaya",
    employment: "Professional",
    income: 110000,
    loanAmount: 6000000,
    existingEmi: 15000,
    loanType: "Home Purchase Loan",
    propertyType: "Independent Villa, AP Colony",
    status: "Converted",
    date: "2026-09-28",
    time: "04:20 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Consultant doctor at Gaya Medical College. All KYC and degree certificates verified.", date: "2026-09-29 11:00 AM", author: "Vikram Kumar" },
      { id: 2, text: "Sanction letter issued for ₹60,00,000 at 8.40% p.a. Disbursement scheduled next week.", date: "2026-10-02 05:00 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry Submitted", date: "28 Sep, 04:20 PM", completed: true },
      { stage: "Eligibility & Docs Clear", date: "29 Sep, 01:00 PM", completed: true },
      { stage: "SBI Application Logged", date: "30 Sep, 11:30 AM", completed: true },
      { stage: "Sanction Letter Issued", date: "02 Oct, 04:45 PM", completed: true }
    ]
  },
  {
    id: "HL1005",
    name: "Sunil Prasad",
    mobile: "+91 94310 55189",
    email: "sunil.prasad.dar@gmail.com",
    city: "Darbhanga",
    employment: "Business Owner",
    income: 75000,
    loanAmount: 4200000,
    existingEmi: 18000,
    loanType: "Home Construction Loan",
    propertyType: "Plot 1800 sq ft, Laheriasarai",
    status: "Follow-up",
    date: "2026-10-01",
    time: "01:10 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Awaiting municipal approved map from local Darbhanga Nagar Nigam.", date: "2026-10-02 02:00 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry Submitted", date: "01 Oct", completed: true },
      { stage: "Contacted", date: "01 Oct", completed: true },
      { stage: "Legal Verification", date: "In Progress", completed: false }
    ]
  },
  {
    id: "HL1006",
    name: "Rajesh Kumar Choudhary",
    mobile: "+91 91223 45678",
    email: "rajesh.choudhary@biharonline.gov.in",
    city: "Patna",
    employment: "Salaried",
    income: 85000,
    loanAmount: 4500000,
    existingEmi: 5000,
    loanType: "Home Purchase Loan",
    propertyType: "Flat in Saguna More, Danapur",
    status: "New",
    date: "2026-10-04",
    time: "09:15 AM",
    assignedTo: "Anjali Sinha",
    notes: [
      { id: 1, text: "Bihar Govt State Officer. Very clean credit background. Wants maximum tenure of 25 years.", date: "2026-10-04 09:30 AM", author: "Anjali Sinha" }
    ],
    timeline: [
      { stage: "Enquiry Received", date: "04 Oct, 09:15 AM", completed: true },
      { stage: "Assigned", date: "04 Oct, 09:20 AM", completed: true }
    ]
  },
  {
    id: "HL1007",
    name: "Kavita Srivastava",
    mobile: "+91 98352 66789",
    email: "kavita.sri@rediffmail.com",
    city: "Siwan",
    employment: "Salaried",
    income: 48000,
    loanAmount: 2200000,
    existingEmi: 0,
    loanType: "Home Renovation Loan",
    propertyType: "Ancestral home remodeling, Hospital Road",
    status: "Contacted",
    date: "2026-10-03",
    time: "03:40 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Wants quotation estimation for renovation. Explained SBI Home Top-up / Renovation scheme guidelines.", date: "2026-10-03 05:10 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry Submitted", date: "03 Oct", completed: true },
      { stage: "Contacted", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1008",
    name: "Manoj Kumar Tiwary",
    mobile: "+91 97715 33219",
    email: "manoj.tiwary.bihar@gmail.com",
    city: "Bihar Sharif",
    employment: "Business Owner",
    income: 125000,
    loanAmount: 7000000,
    existingEmi: 22000,
    loanType: "Home Loan Balance Transfer",
    propertyType: "Commercial + Residential Mix",
    status: "Follow-up",
    date: "2026-10-02",
    time: "12:00 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Currently paying 10.25% to private NBFC. Wants balance transfer to SBI at 8.50%. Potential savings ₹11,000/month.", date: "2026-10-02 04:30 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry Received", date: "02 Oct", completed: true },
      { stage: "Foreclosure Statement Requested", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1009",
    name: "Vikash Ranjan",
    mobile: "+91 99341 88901",
    email: "vikash.ranjan.pat@gmail.com",
    city: "Patna",
    employment: "Salaried",
    income: 95000,
    loanAmount: 5500000,
    existingEmi: 14000,
    loanType: "Home Purchase Loan",
    propertyType: "G+2 House in Kankarbagh",
    status: "Converted",
    date: "2026-09-25",
    time: "11:15 AM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Loan disbursed successfully at 8.45% p.a. Customer gave 5-star feedback on WhatsApp.", date: "2026-10-01 02:00 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "25 Sep", completed: true },
      { stage: "Sanction", date: "28 Sep", completed: true },
      { stage: "Disbursement", date: "01 Oct", completed: true }
    ]
  },
  {
    id: "HL1010",
    name: "Alok Kumar Yadav",
    mobile: "+91 94302 11984",
    email: "alok.yadav.siwan@gmail.com",
    city: "Siwan",
    employment: "Self Employed",
    income: 60000,
    loanAmount: 3000000,
    existingEmi: 6000,
    loanType: "Home Construction Loan",
    propertyType: "Self plot near Chapra Bypass",
    status: "Contacted",
    date: "2026-10-03",
    time: "10:00 AM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Customer needs guidance on LPC (Land Possession Certificate) and mutation receipt.", date: "2026-10-03 11:30 AM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "03 Oct", completed: true },
      { stage: "Contacted", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1011",
    name: "Deepak Agrawal",
    mobile: "+91 98350 99882",
    email: "deepak.agrawal.patna@gmail.com",
    city: "Patna",
    employment: "Business Owner",
    income: 180000,
    loanAmount: 11000000,
    existingEmi: 35000,
    loanType: "Home Purchase Loan",
    propertyType: "Luxury Penthouse, Exhibition Road",
    status: "Follow-up",
    date: "2026-10-01",
    time: "04:45 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "High net-worth client. Wholesale cloth merchant. Audit reports submitted. Coordinating with SBI SME Branch.", date: "2026-10-02 11:15 AM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "01 Oct", completed: true },
      { stage: "Technical Evaluation", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1012",
    name: "Ritu Kumari",
    mobile: "+91 97711 66554",
    email: "ritu.teacher.bihar@gmail.com",
    city: "Gaya",
    employment: "Salaried",
    income: 42000,
    loanAmount: 2000000,
    existingEmi: 4000,
    loanType: "Home Extension Loan",
    propertyType: "Adding 1st Floor, Manpur",
    status: "New",
    date: "2026-10-04",
    time: "08:20 AM",
    assignedTo: "Anjali Sinha",
    notes: [
      { id: 1, text: "Govt school teacher. Co-applicant brother also working in railways. Good FOIR capacity.", date: "2026-10-04 08:45 AM", author: "Anjali Sinha" }
    ],
    timeline: [
      { stage: "Enquiry Received", date: "04 Oct, 08:20 AM", completed: true }
    ]
  },
  {
    id: "HL1013",
    name: "Mohammad Tarique",
    mobile: "+91 99344 12345",
    email: "tarique.nri.dubai@gmail.com",
    city: "Siwan",
    employment: "Salaried",
    income: 240000,
    loanAmount: 8500000,
    existingEmi: 0,
    loanType: "NRI Home Loan",
    propertyType: "Modern Bungalow, Tarwara Road",
    status: "Contacted",
    date: "2026-10-02",
    time: "07:30 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "NRI living in Dubai, UAE. NRE bank statements and embassy attested POA needed. Father is GPA holder in Siwan.", date: "2026-10-03 10:00 AM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "02 Oct", completed: true },
      { stage: "WhatsApp Call Done", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1014",
    name: "Santosh Pandey",
    mobile: "+91 94318 77665",
    email: "santosh.pandey.muz@gmail.com",
    city: "Muzaffarpur",
    employment: "Self Employed",
    income: 58000,
    loanAmount: 3200000,
    existingEmi: 9000,
    loanType: "Home Construction Loan",
    propertyType: "Plot in Ahiyapur",
    status: "Lost",
    date: "2026-09-22",
    time: "03:10 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "CIBIL score is 580 due to defaulted personal loan from 2023. Not eligible currently. Advised CIBIL dispute and settling dues.", date: "2026-09-23 04:00 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "22 Sep", completed: true },
      { stage: "CIBIL Check Failed", date: "23 Sep", completed: true }
    ]
  },
  {
    id: "HL1015",
    name: "Anand Kishore",
    mobile: "+91 98359 43210",
    email: "anand.kishore@delhi-tech.com",
    city: "Delhi",
    employment: "Salaried",
    income: 135000,
    loanAmount: 6500000,
    existingEmi: 16000,
    loanType: "Home Purchase Loan",
    propertyType: "Dwarka Expressway, Sector 104",
    status: "Converted",
    date: "2026-09-20",
    time: "01:25 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Software architect buying property. Smooth digital login and verification completed.", date: "2026-09-28 03:00 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "20 Sep", completed: true },
      { stage: "Sanction", date: "25 Sep", completed: true },
      { stage: "Disbursement", date: "28 Sep", completed: true }
    ]
  },
  {
    id: "HL1016",
    name: "Gaurav Sen",
    mobile: "+91 97719 88331",
    email: "gaurav.sen.patna@gmail.com",
    city: "Patna",
    employment: "Salaried",
    income: 70000,
    loanAmount: 3800000,
    existingEmi: 7500,
    loanType: "Home Purchase Loan",
    propertyType: "RPS More, Danapur",
    status: "New",
    date: "2026-10-04",
    time: "11:50 AM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Enquiry received via EMI calculator CTA.", date: "2026-10-04 11:50 AM", author: "System" }
    ],
    timeline: [
      { stage: "Enquiry Received", date: "04 Oct, 11:50 AM", completed: true }
    ]
  },
  {
    id: "HL1017",
    name: "Naveen Jha",
    mobile: "+91 99347 55443",
    email: "naveen.jha.darbhanga@gmail.com",
    city: "Darbhanga",
    employment: "Professional",
    income: 80000,
    loanAmount: 4000000,
    existingEmi: 11000,
    loanType: "Home Purchase Loan",
    propertyType: "VIP Road, Allalpatti",
    status: "Contacted",
    date: "2026-10-03",
    time: "04:10 PM",
    assignedTo: "Anjali Sinha",
    notes: [
      { id: 1, text: "Chartered Accountant. Looking for builder tie-up project in Darbhanga.", date: "2026-10-03 06:00 PM", author: "Anjali Sinha" }
    ],
    timeline: [
      { stage: "Enquiry", date: "03 Oct", completed: true },
      { stage: "Contacted", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1018",
    name: "Abhishek Dubey",
    mobile: "+91 94314 22334",
    email: "abhishek.dubey.siwan@gmail.com",
    city: "Siwan",
    employment: "Business Owner",
    income: 105000,
    loanAmount: 5200000,
    existingEmi: 15000,
    loanType: "Home Loan Balance Transfer",
    propertyType: "Residential Building, Kagzi Mohalla",
    status: "Follow-up",
    date: "2026-10-02",
    time: "02:30 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Existing loan with Axis Bank at 9.75%. Wants transfer + ₹10 Lakh top-up.", date: "2026-10-03 12:30 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "02 Oct", completed: true },
      { stage: "List of Documents Shared", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1019",
    name: "Pooja Mishra",
    mobile: "+91 98358 11223",
    email: "pooja.mishra.pat@gmail.com",
    city: "Patna",
    employment: "Salaried",
    income: 62000,
    loanAmount: 3200000,
    existingEmi: 6000,
    loanType: "Home Purchase Loan",
    propertyType: "Apartment in Ashiana Nagar",
    status: "Contacted",
    date: "2026-10-03",
    time: "01:15 PM",
    assignedTo: "Anjali Sinha",
    notes: [
      { id: 1, text: "First-time female home buyer. Eligible for 0.05% concession on interest rate!", date: "2026-10-03 03:00 PM", author: "Anjali Sinha" }
    ],
    timeline: [
      { stage: "Enquiry", date: "03 Oct", completed: true },
      { stage: "Contacted", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1020",
    name: "Rameshwar Sah",
    mobile: "+91 97710 44556",
    email: "rameshwar.sah.muz@gmail.com",
    city: "Muzaffarpur",
    employment: "Self Employed",
    income: 72000,
    loanAmount: 3600000,
    existingEmi: 8000,
    loanType: "Home Construction Loan",
    propertyType: "Plot in Bela Industrial Area",
    status: "New",
    date: "2026-10-04",
    time: "12:15 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "New lead from popup modal. Wants callback after 5 PM.", date: "2026-10-04 12:15 PM", author: "System" }
    ],
    timeline: [
      { stage: "Enquiry Received", date: "04 Oct, 12:15 PM", completed: true }
    ]
  },
  {
    id: "HL1021",
    name: "Saurabh Mukherjee",
    mobile: "+91 99349 77889",
    email: "saurabh.mukherjee@noida-it.in",
    city: "Noida",
    employment: "Salaried",
    income: 160000,
    loanAmount: 8000000,
    existingEmi: 20000,
    loanType: "Home Purchase Loan",
    propertyType: "Sector 137, Noida Expressway",
    status: "Follow-up",
    date: "2026-10-01",
    time: "05:00 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Senior engineering manager. Pre-approval letter requested.", date: "2026-10-02 10:00 AM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "01 Oct", completed: true },
      { stage: "Docs Collected", date: "02 Oct", completed: true }
    ]
  },
  {
    id: "HL1022",
    name: "Ashok Paswan",
    mobile: "+91 94315 99001",
    email: "ashok.paswan.gaya@gmail.com",
    city: "Gaya",
    employment: "Salaried",
    income: 55000,
    loanAmount: 2600000,
    existingEmi: 5000,
    loanType: "Home Purchase Loan",
    propertyType: "Civil Lines, Gaya",
    status: "Converted",
    date: "2026-09-24",
    time: "10:00 AM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Railway employee. Special concessional pricing applied. Loan disbursed.", date: "2026-09-30 04:00 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "24 Sep", completed: true },
      { stage: "Disbursement", date: "30 Sep", completed: true }
    ]
  },
  {
    id: "HL1023",
    name: "Farhan Akhtar",
    mobile: "+91 98357 66554",
    email: "farhan.akhtar.siwan@gmail.com",
    city: "Siwan",
    employment: "Business Owner",
    income: 98000,
    loanAmount: 4800000,
    existingEmi: 14000,
    loanType: "Home Construction Loan",
    propertyType: "Panchrukhi Main Road",
    status: "Follow-up",
    date: "2026-10-02",
    time: "11:20 AM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Property search report received. Valuation report pending from bank empaneled engineer.", date: "2026-10-03 04:30 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "02 Oct", completed: true },
      { stage: "Legal Cleared", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1024",
    name: "Vinay Pathak",
    mobile: "+91 97718 11992",
    email: "vinay.pathak.patna@gmail.com",
    city: "Patna",
    employment: "Salaried",
    income: 78000,
    loanAmount: 4200000,
    existingEmi: 10000,
    loanType: "Home Purchase Loan",
    propertyType: "Khagaul Road, Danapur",
    status: "Contacted",
    date: "2026-10-03",
    time: "02:40 PM",
    assignedTo: "Anjali Sinha",
    notes: [
      { id: 1, text: "Customer shortlisted 2 projects. Advised to verify RERA registration number before token money.", date: "2026-10-03 04:30 PM", author: "Anjali Sinha" }
    ],
    timeline: [
      { stage: "Enquiry", date: "03 Oct", completed: true },
      { stage: "Advisory Call Done", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1025",
    name: "Mukesh Baranwal",
    mobile: "+91 99343 88442",
    email: "mukesh.baranwal.bihar@gmail.com",
    city: "Bihar Sharif",
    employment: "Business Owner",
    income: 88000,
    loanAmount: 4600000,
    existingEmi: 12500,
    loanType: "Home Construction Loan",
    propertyType: "Ranchi Road, Nalanda",
    status: "New",
    date: "2026-10-04",
    time: "01:05 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Enquiry received from Mobile sticky bar WhatsApp.", date: "2026-10-04 01:05 PM", author: "System" }
    ],
    timeline: [
      { stage: "Enquiry Received", date: "04 Oct, 01:05 PM", completed: true }
    ]
  },
  {
    id: "HL1026",
    name: "Shweta Kashyap",
    mobile: "+91 94311 33221",
    email: "shweta.kashyap.lucknow@gmail.com",
    city: "Lucknow",
    employment: "Salaried",
    income: 84000,
    loanAmount: 4500000,
    existingEmi: 8000,
    loanType: "Home Purchase Loan",
    propertyType: "Gomti Nagar Extension",
    status: "Contacted",
    date: "2026-10-03",
    time: "12:10 PM",
    assignedTo: "Anjali Sinha",
    notes: [
      { id: 1, text: "Working with PSU bank herself, needs guidance on SBI interest rate concessions.", date: "2026-10-03 03:15 PM", author: "Anjali Sinha" }
    ],
    timeline: [
      { stage: "Enquiry", date: "03 Oct", completed: true },
      { stage: "Contacted", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1027",
    name: "Rajiv Ranjan",
    mobile: "+91 98354 77661",
    email: "rajiv.ranjan.ranchi@gmail.com",
    city: "Ranchi",
    employment: "Salaried",
    income: 115000,
    loanAmount: 5800000,
    existingEmi: 19000,
    loanType: "Home Purchase Loan",
    propertyType: "Bariatu Road, Ranchi",
    status: "Follow-up",
    date: "2026-10-02",
    time: "04:00 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Customer submitted Form 16 and bank statement. Eligibility computed at ₹62 Lakhs.", date: "2026-10-03 11:30 AM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "02 Oct", completed: true },
      { stage: "Eligibility Verified", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1028",
    name: "Ajay Singh Tomar",
    mobile: "+91 97713 55887",
    email: "ajay.singh.siwan@gmail.com",
    city: "Siwan",
    employment: "Self Employed",
    income: 68000,
    loanAmount: 3400000,
    existingEmi: 7000,
    loanType: "Home Construction Loan",
    propertyType: "Barharia Road",
    status: "Contacted",
    date: "2026-10-03",
    time: "09:30 AM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Needs assistance with chain deed verification from 1985.", date: "2026-10-03 11:00 AM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "03 Oct", completed: true },
      { stage: "Contacted", date: "03 Oct", completed: true }
    ]
  },
  {
    id: "HL1029",
    name: "Sneha Roy",
    mobile: "+91 99346 22119",
    email: "sneha.roy.patna@gmail.com",
    city: "Patna",
    employment: "Salaried",
    income: 92000,
    loanAmount: 4800000,
    existingEmi: 11000,
    loanType: "Home Purchase Loan",
    propertyType: "Flat in Gola Road, Patna",
    status: "New",
    date: "2026-10-04",
    time: "02:10 PM",
    assignedTo: "Anjali Sinha",
    notes: [
      { id: 1, text: "Submitted eligibility form. Ready to schedule appointment for tomorrow.", date: "2026-10-04 02:10 PM", author: "System" }
    ],
    timeline: [
      { stage: "Enquiry Received", date: "04 Oct, 02:10 PM", completed: true }
    ]
  },
  {
    id: "HL1030",
    name: "Dharmendra Shah",
    mobile: "+91 94317 44883",
    email: "dharmendra.shah.muz@gmail.com",
    city: "Muzaffarpur",
    employment: "Business Owner",
    income: 140000,
    loanAmount: 7500000,
    existingEmi: 25000,
    loanType: "Home Loan Balance Transfer",
    propertyType: "Commercial Cum Residential Building",
    status: "Follow-up",
    date: "2026-10-01",
    time: "03:15 PM",
    assignedTo: "Vikram Kumar",
    notes: [
      { id: 1, text: "Existing loan with HDFC at 9.40%. Switching to SBI at 8.50%. Foreclosure letter pending.", date: "2026-10-02 01:00 PM", author: "Vikram Kumar" }
    ],
    timeline: [
      { stage: "Enquiry", date: "01 Oct", completed: true },
      { stage: "Follow-up Scheduled", date: "05 Oct", completed: true }
    ]
  }
];

// Kanban Applications Pipeline
export const INITIAL_APPLICATIONS = [
  {
    id: "APP-801",
    customerName: "Rahul Kumar",
    leadId: "HL1001",
    amount: "₹35,00,000",
    city: "Patna",
    stage: "New Lead",
    employment: "Salaried",
    agent: "Vikram Kumar",
    lastUpdated: "Today, 10:35 AM",
    priority: "High"
  },
  {
    id: "APP-802",
    customerName: "Priya Singh",
    leadId: "HL1002",
    amount: "₹50,00,000",
    city: "Siwan",
    stage: "Contacted",
    employment: "Business Owner",
    agent: "Vikram Kumar",
    lastUpdated: "Yesterday, 04:00 PM",
    priority: "High"
  },
  {
    id: "APP-803",
    customerName: "Aman Verma",
    leadId: "HL1003",
    amount: "₹28,00,000",
    city: "Muzaffarpur",
    stage: "Eligibility Checked",
    employment: "Salaried",
    agent: "Anjali Sinha",
    lastUpdated: "03 Oct, 11:00 AM",
    priority: "Medium"
  },
  {
    id: "APP-804",
    customerName: "Abhishek Dubey",
    leadId: "HL1018",
    amount: "₹52,00,000",
    city: "Siwan",
    stage: "Documents Pending",
    employment: "Business Owner",
    agent: "Vikram Kumar",
    lastUpdated: "03 Oct, 12:30 PM",
    priority: "High"
  },
  {
    id: "APP-805",
    customerName: "Deepak Agrawal",
    leadId: "HL1011",
    amount: "₹1,10,00,000",
    city: "Patna",
    stage: "Application Submitted",
    employment: "Business Owner",
    agent: "Vikram Kumar",
    lastUpdated: "03 Oct, 11:15 AM",
    priority: "Urgent"
  },
  {
    id: "APP-806",
    customerName: "Farhan Akhtar",
    leadId: "HL1023",
    amount: "₹48,00,000",
    city: "Siwan",
    stage: "Under Process",
    employment: "Business Owner",
    agent: "Vikram Kumar",
    lastUpdated: "03 Oct, 04:30 PM",
    priority: "Medium"
  },
  {
    id: "APP-807",
    customerName: "Dr. Neha Sharma",
    leadId: "HL1004",
    amount: "₹60,00,000",
    city: "Gaya",
    stage: "Approved",
    employment: "Professional",
    agent: "Vikram Kumar",
    lastUpdated: "02 Oct, 05:00 PM",
    priority: "High"
  },
  {
    id: "APP-808",
    customerName: "Vikash Ranjan",
    leadId: "HL1009",
    amount: "₹55,00,000",
    city: "Patna",
    stage: "Disbursed",
    employment: "Salaried",
    agent: "Vikram Kumar",
    lastUpdated: "01 Oct, 02:00 PM",
    priority: "Completed"
  },
  {
    id: "APP-809",
    customerName: "Ashok Paswan",
    leadId: "HL1022",
    amount: "₹26,00,000",
    city: "Gaya",
    stage: "Disbursed",
    employment: "Salaried",
    agent: "Vikram Kumar",
    lastUpdated: "30 Sep, 04:00 PM",
    priority: "Completed"
  },
  {
    id: "APP-810",
    customerName: "Santosh Pandey",
    leadId: "HL1014",
    amount: "₹32,00,000",
    city: "Muzaffarpur",
    stage: "Closed",
    employment: "Self Employed",
    agent: "Vikram Kumar",
    lastUpdated: "23 Sep, 04:00 PM",
    priority: "Low"
  }
];

export const INITIAL_FOLLOWUPS = [
  {
    id: "FUP-01",
    customerName: "Rahul Kumar",
    leadId: "HL1001",
    mobile: "+91 98351 44121",
    city: "Patna",
    date: "2026-10-04",
    time: "04:30 PM",
    status: "Due Today",
    note: "Conduct initial telephone interview. Explain SBI interest structure and collection of salary slips.",
    type: "Call"
  },
  {
    id: "FUP-02",
    customerName: "Aman Verma",
    leadId: "HL1003",
    mobile: "+91 99340 77172",
    city: "Muzaffarpur",
    date: "2026-10-05",
    time: "11:00 AM",
    status: "Upcoming",
    note: "Finalize tenure option (20 vs 25 yrs) and collect Form 16.",
    type: "WhatsApp"
  },
  {
    id: "FUP-03",
    customerName: "Manoj Kumar Tiwary",
    leadId: "HL1008",
    mobile: "+91 97715 33219",
    city: "Bihar Sharif",
    date: "2026-10-05",
    time: "02:30 PM",
    status: "Upcoming",
    note: "Follow-up on Axis Bank Foreclosure statement and list of documents (LOD).",
    type: "Call"
  },
  {
    id: "FUP-04",
    customerName: "Sunil Prasad",
    leadId: "HL1005",
    mobile: "+91 94310 55189",
    city: "Darbhanga",
    date: "2026-10-04",
    time: "05:00 PM",
    status: "Due Today",
    note: "Check if Nagar Nigam approved map is ready from architect.",
    type: "Call"
  },
  {
    id: "FUP-05",
    customerName: "Deepak Agrawal",
    leadId: "HL1011",
    mobile: "+91 98350 99882",
    city: "Patna",
    date: "2026-10-06",
    time: "10:30 AM",
    status: "Upcoming",
    note: "Schedule physical site inspection with bank panel valuer at Exhibition Road.",
    type: "Meeting"
  },
  {
    id: "FUP-06",
    customerName: "Mohammad Tarique",
    leadId: "HL1013",
    mobile: "+91 99344 12345",
    city: "Siwan",
    date: "2026-10-04",
    time: "08:00 PM",
    status: "Due Today",
    note: "Video call with NRI client in Dubai regarding Indian Embassy POA verification.",
    type: "Video Call"
  },
  {
    id: "FUP-07",
    customerName: "Abhishek Dubey",
    leadId: "HL1018",
    mobile: "+91 94314 22334",
    city: "Siwan",
    date: "2026-10-05",
    time: "03:00 PM",
    status: "Upcoming",
    note: "Collect ITR copies and GST receipts for balance transfer login.",
    type: "Document Pickup"
  },
  {
    id: "FUP-08",
    customerName: "Dharmendra Shah",
    leadId: "HL1030",
    mobile: "+91 94317 44883",
    city: "Muzaffarpur",
    date: "2026-10-03",
    time: "03:00 PM",
    status: "Overdue",
    note: "Overdue callback regarding interest differential calculations.",
    type: "Call"
  }
];

export const INITIAL_CUSTOMERS = [
  {
    id: "CUST-501",
    name: "Vikash Ranjan",
    mobile: "+91 99341 88901",
    email: "vikash.ranjan.pat@gmail.com",
    city: "Patna",
    loanAmount: "₹55,00,000",
    sanctionDate: "28 Sep 2026",
    disbursementDate: "01 Oct 2026",
    interestRate: "8.45%",
    tenure: "25 Years",
    property: "G+2 House, Kankarbagh",
    manager: "Vikram Kumar"
  },
  {
    id: "CUST-502",
    name: "Dr. Neha Sharma",
    mobile: "+91 96081 22915",
    email: "dr.neha.sharma.gaya@gmail.com",
    city: "Gaya",
    loanAmount: "₹60,00,000",
    sanctionDate: "02 Oct 2026",
    disbursementDate: "Pending (Next Week)",
    interestRate: "8.40%",
    tenure: "20 Years",
    property: "Independent Villa, AP Colony",
    manager: "Vikram Kumar"
  },
  {
    id: "CUST-503",
    name: "Ashok Paswan",
    mobile: "+91 94315 99001",
    email: "ashok.paswan.gaya@gmail.com",
    city: "Gaya",
    loanAmount: "₹26,00,000",
    sanctionDate: "27 Sep 2026",
    disbursementDate: "30 Sep 2026",
    interestRate: "8.50%",
    tenure: "20 Years",
    property: "Civil Lines, Gaya",
    manager: "Vikram Kumar"
  },
  {
    id: "CUST-504",
    name: "Anand Kishore",
    mobile: "+91 98359 43210",
    email: "anand.kishore@delhi-tech.com",
    city: "Delhi",
    loanAmount: "₹65,00,000",
    sanctionDate: "25 Sep 2026",
    disbursementDate: "28 Sep 2026",
    interestRate: "8.50%",
    tenure: "20 Years",
    property: "Dwarka Expressway, Sector 104",
    manager: "Vikram Kumar"
  },
  {
    id: "CUST-505",
    name: "Shyam Sundar Jha",
    mobile: "+91 98355 12903",
    email: "ss.jha.patna@gmail.com",
    city: "Patna",
    loanAmount: "₹42,00,000",
    sanctionDate: "15 Sep 2026",
    disbursementDate: "20 Sep 2026",
    interestRate: "8.50%",
    tenure: "20 Years",
    property: "Anandpuri, Boring Canal Road",
    manager: "Vikram Kumar"
  },
  {
    id: "CUST-506",
    name: "Md. Imtiaz Alam",
    mobile: "+91 97714 66012",
    email: "imtiaz.alam.siwan@gmail.com",
    city: "Siwan",
    loanAmount: "₹38,00,000",
    sanctionDate: "10 Sep 2026",
    disbursementDate: "18 Sep 2026",
    interestRate: "8.55%",
    tenure: "25 Years",
    property: "Barauli Road, Siwan",
    manager: "Vikram Kumar"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Patna, Bihar",
    rating: 5,
    role: "Salaried IT Professional",
    loanAmount: "₹42 Lakhs",
    content: "Getting guidance during my home-loan process made everything much easier. I understood the required documents and next steps clearly without having to visit multiple bank counters. Vikram ji explained the exact eligibility and SBI interest rate calculation upfront.",
    date: "September 2026"
  },
  {
    id: 2,
    name: "Priya Singh",
    location: "Siwan, Bihar",
    rating: 5,
    role: "Proprietor & Retail Business Owner",
    loanAmount: "₹50 Lakhs",
    content: "As a business owner, getting a home loan seemed overwhelming because of GST and ITR documentation. HomeLoan Assist guided me through the exact balance sheet preparation. My construction loan in Siwan got approved in record time!",
    date: "August 2026"
  },
  {
    id: 3,
    name: "Amitav Roy",
    location: "Muzaffarpur, Bihar",
    rating: 5,
    role: "Govt. Officer",
    loanAmount: "₹35 Lakhs",
    content: "Super transparent assistance. No hidden charges, no false promises. They did an accurate FOIR calculation so I knew beforehand how much loan I would qualify for. Highly recommended for anyone in North Bihar.",
    date: "September 2026"
  },
  {
    id: 4,
    name: "Dr. Neha Sharma",
    location: "Gaya, Bihar",
    rating: 5,
    role: "Medical Practitioner",
    loanAmount: "₹60 Lakhs",
    content: "Being busy with hospital duties, I had zero time to follow up on documentation. HomeLoan Assist handled the paperwork checklist, legal verification guidance, and bank coordination flawlessly. Truly top-notch advisory.",
    date: "October 2026"
  }
];

export const PRODUCTS = [
  {
    id: "home-purchase",
    title: "Home Purchase Loan",
    badge: "Most Popular",
    shortDesc: "Financing to purchase a new or resale residential flat, apartment, or independent house.",
    keyFeatures: [
      "Up to 30 years repayment tenure",
      "Competitive interest rates starting 8.50% p.a.",
      "Financing up to 80%–90% of property cost",
      "Special concession for women co-borrowers"
    ],
    idealFor: "Salaried & Self-employed buyers purchasing ready-to-move or under-construction homes."
  },
  {
    id: "home-construction",
    title: "Home Construction Loan",
    badge: "Custom Build",
    shortDesc: "Stage-wise funding to construct your dream house on a residential plot you already own.",
    keyFeatures: [
      "Disbursement linked to construction stages",
      "Interest charged only on disbursed amount",
      "Architect estimation & layout guidance",
      "Tenure up to 30 years"
    ],
    idealFor: "Borrowers owning ancestral or purchased land building an independent bungalow."
  },
  {
    id: "home-extension",
    title: "Home Extension Loan",
    badge: "Expand Space",
    shortDesc: "Funds to add more living space, an additional floor, bedroom, or balcony to your existing home.",
    keyFeatures: [
      "Minimal documentation if existing loan is clear",
      "Tenure aligned with borrower's retirement age",
      "LTV based on property valuation & cost estimate",
      "Fast turnaround time"
    ],
    idealFor: "Growing families needing additional rooms or vertical expansion on existing homes."
  },
  {
    id: "home-renovation",
    title: "Home Renovation Loan",
    badge: "Modernize Home",
    shortDesc: "Loan for repairs, interior redesigning, modular kitchen, flooring, painting, and roof upgrade.",
    keyFeatures: [
      "Attractive interest rates compared to personal loans",
      "Tenure up to 15 years",
      "No heavy mortgage paperwork on minor works",
      "Enhances market valuation of your property"
    ],
    idealFor: "Homeowners looking to upgrade interiors, electricals, sanitation, or structural repairs."
  },
  {
    id: "balance-transfer",
    title: "Home Loan Balance Transfer",
    badge: "Save on EMI",
    shortDesc: "Transfer your high-interest existing home loan to lower interest rates with a top-up loan facility.",
    keyFeatures: [
      "Immediate reduction in monthly EMI burden",
      "Top-up loan facility up to ₹50 Lakhs for personal needs",
      "Zero foreclosure penalties on floating rate loans",
      "Complete handover support from old to new lender"
    ],
    idealFor: "Borrowers currently paying 9.5%+ interest with other NBFCs or private banks."
  },
  {
    id: "nri-home-loan",
    title: "NRI Home Loan",
    badge: "Global Indians",
    shortDesc: "Dedicated financing solutions for Non-Resident Indians (NRIs) and PIOs investing in property in India.",
    keyFeatures: [
      "Seamless documentation via POA (Power of Attorney)",
      "NRE / NRO account auto-debit options",
      "Tenure up to 20–30 years based on profile",
      "Online document review & doorstep assistance in Bihar"
    ],
    idealFor: "NRIs working in the Gulf, USA, Europe, or Singapore buying property back home."
  }
];

export const FAQS = [
  {
    id: 1,
    category: "Eligibility & Loan Amount",
    question: "How much home loan can I get?",
    answer: "Your loan eligibility primarily depends on your net monthly income, existing monthly EMIs, age, credit score (CIBIL 750+ preferred), and the property value. Lenders generally evaluate the FOIR (Fixed Obligation to Income Ratio) — ensuring your total monthly debt payments do not exceed 50% to 65% of your net monthly earnings. Use our interactive Eligibility Calculator on this website to compute an indicative estimate."
  },
  {
    id: 2,
    category: "Documents & Process",
    question: "What documents are required to apply?",
    answer: "For salaried applicants: KYC documents (PAN & Aadhaar), last 3 to 6 months salary slips, last 2 years Form 16, and last 6 months bank statements. For self-employed individuals: KYC, business registration certificate, last 3 years ITR with computation of income, CA-certified Balance Sheet & P&L statements, and 12 months bank statements. Property documents include the registered sale deed, agreement to sell, and approved municipal maps."
  },
  {
    id: 3,
    category: "Employment & Profile",
    question: "Can self-employed people and business owners apply?",
    answer: "Yes, absolutely! Self-employed professionals (doctors, CAs, architects, lawyers) as well as traders, contractors, and business proprietors with at least 2–3 years of continuous business operations and filed ITRs can easily secure a home loan. We provide dedicated assistance in preparing financial abstracts and meeting lender compliance."
  },
  {
    id: 4,
    category: "Balance Transfer & Savings",
    question: "Can I apply for a home loan balance transfer?",
    answer: "Yes! If you are currently paying a higher interest rate with another bank or housing finance company (NBFC), transferring your existing balance to a low-rate lender (such as SBI) can save you lakhs of rupees in interest. You can also avail of an additional Top-up Loan at home-loan interest rates for renovation, business, or education."
  },
  {
    id: 5,
    category: "Calculations & EMI",
    question: "How is the Home Loan EMI calculated?",
    answer: "Home loan EMI is calculated using the reducing balance method formula: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1], where P is Principal amount, R is monthly interest rate, and N is tenure in months. In the early years, a larger portion of each EMI goes toward paying interest; as time progresses, the principal repayment component increases."
  },
  {
    id: 6,
    category: "Timeline & Approval",
    question: "How long does the entire loan process take?",
    answer: "Typically, from document submission to sanction letter takes 3 to 7 working days for salaried applicants with clean documentation. For self-employed or plot construction loans involving legal search and technical valuation, it generally takes 7 to 14 working days. Our personalized assistance ensures that document deficiencies are resolved early to prevent delays."
  },
  {
    id: 7,
    category: "Pre-check & CIBIL",
    question: "Can I check my eligibility before formally applying?",
    answer: "Yes! We strongly encourage evaluating your financial eligibility and CIBIL health before submitting a formal bank file. Multiple formal loan rejections can hurt your CIBIL score, whereas our free pre-eligibility review does not count as a hard bank inquiry."
  },
  {
    id: 8,
    category: "Approval Guarantee & Disclaimers",
    question: "Will submitting an enquiry guarantee loan approval?",
    answer: "No. HomeLoan Assist is an independent advisory and lead-assistance service. Final loan approval, interest rate concessions, maximum sanction amount, and legal disbursement are strictly subject to the respective lending bank's (such as SBI or other financial institutions) internal credit, technical, and legal assessment."
  }
];

export const TRUST_FEATURES = [
  {
    title: "Expert Guidance",
    desc: "Over 8 years of specialized home loan advisory experience navigating complex banking guidelines."
  },
  {
    title: "Eligibility Assistance",
    desc: "Scientific FOIR and income analysis to maximize your sanctioned loan amount safely."
  },
  {
    title: "Simple Documentation",
    desc: "Clear, tailored document checklists so you don't waste time on unnecessary paperwork."
  },
  {
    title: "Application Support",
    desc: "End-to-end guidance from preliminary file login to legal vetting and final sanction."
  },
  {
    title: "Transparent Process",
    desc: "Zero hidden charges, direct bank disbursement, and straightforward advice on every clause."
  },
  {
    title: "Personalized Assistance",
    desc: "Dedicated point of contact with local ground expertise in Patna, Siwan, and across Bihar."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Your Requirement",
    desc: "Submit your basic loan requirement, employment details, and property preference through our online enquiry or quick callback."
  },
  {
    step: "02",
    title: "Check Eligibility",
    desc: "We analyze your net income, FOIR obligations, and credit history to calculate your realistic loan eligibility and optimal tenure."
  },
  {
    step: "03",
    title: "Prepare Documents",
    desc: "Receive a personalized document checklist (salary slips, ITRs, property deeds) and pre-screen every document for zero bank rejections."
  },
  {
    step: "04",
    title: "Submit Application",
    desc: "Your file is prepared and lodged with the preferred branch/lender, expediting internal processing and banker coordination."
  },
  {
    step: "05",
    title: "Loan Processing & Sanction",
    desc: "Following technical site inspection and legal clearance, your formal sanction letter is issued and loan funds are disbursed."
  }
];
