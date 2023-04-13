export const typeFormStructure = [
  {
    no: "",
    question: "Up-skilling requires time commitment",
    intro:
      "The GrowthX experience is designed by keeping in mind the working hours founders & full time operators typically work in.",
    type: "intro",
  },
  {
    no: "1.",
    question: "What's your first name?*",
    intro: "",
    type: "text",
    questionType: "firstName",
  },
  {
    no: "2.",
    question: "What's your last name",
    intro: "",
    type: "text",
    questionType: "lastName",
  },
  {
    no: "3.",
    question: "Your role in your company?",
    intro: "We want to understand how you spend your time right now.",
    disclaimer:
      "[ 🔴DEVELOPER NOTICE: Options in the questions ahead depend on this question's response/s. ]",
    type: "option",
    options: [
      "Founder or CXO",
      "Product team",
      "Marketing team",
      "VC",
      "other",
    ],
    optionCount: 1,
    optionLabel: "role",
  },
  {
    no: "4.",
    question: "What industry is your company in?",
    intro: "We will personalize your learning experience accordingly",
    type: "autocomplete",
  },
  {
    no: "5.",
    question: "what's your professional goal for the next 12 months?",
    intro: "",
    type: "option",
    options: [
      "Get hired",
      "Get promoted",
      "Connect with like-minded people",
      "Structured approach to growth",
      "Build a growth team",
    ],
    optionForFounder: [
      "Structured approach to growth",
      "Build a growth team",
      "Connect with like-minded people"
    ],
    optionCount: 2,
    optionLabel: "goal",
  },
  {
    no: "6.",
    question: "Email you'd like to register with?*",
    intro:
      "We will keep all our communications with you through this email. Do check your spam inbox if you can't find our application received email.",
    disclaimer:
      "[ 🔴DEVELOPER NOTICE: Responses submitted to this form will be forwarded to the email you input here, for you to test data submissions. ]",
    type: "text",
    questionType: "email",
  },
  {
    no: "7.",
    question: "Your phone number*",
    intro: "",
    disclaimer: "",
    type: "text",
    questionType: "phoneNO",
  },
  { no: "", intro: "All done! Thanks for your time." },
];
