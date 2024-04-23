"use server";
import axios from "axios";
// You can use this file to write server side submit handlers, and import them into client components.

// send welcome call
export async function sendCall(formData) {
   const res = await axios.post(
      "https://app.bland.ai/v1/welcome/call",
      {},
      {
         phone_number: formData.phone_number,
         firstName: formData.name,
      }
   );
   return res
}
