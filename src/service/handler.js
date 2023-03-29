import axios from "axios";

export const submitResponseToEmail = async (details) => {
    try {
      const response = await axios.post(
        "https://eo3oi83n1j77wgp.m.pipedream.net",
        {
            firstName: details.firstName,
            lastName: details.lastName,
            industry: details.industry,
            role: details.role,
            goal: details.goal.toString(),
            email: details.email,
            phoneNO: details.phoneNO
        }
      )
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  };