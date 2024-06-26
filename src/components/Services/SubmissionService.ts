// services/SubmissionService.ts

import { Submission } from "components/Models/submissions";

const API_URL = 'https://portal.umat.edu.gh/subapi/api/Submission';

export const SubmissionService = {
    getUserSubmissions: async (): Promise<Submission[]> => {
        //const response = await fetch(`${API_URL}/GetUserSubmissions`);
        const token=localStorage.getItem("token");
        console.log(token);
        const response = await fetch(`${API_URL}/GetUserSubmissions`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request headers
            },
          });

          console.log(response);
        if (!response.ok) {
            throw new Error('Failed to fetch submissions');
        }
        
        return response.json();
    }

   };
