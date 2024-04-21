export const curl = `
curl --request POST 
  --url https://api.bland.ai/v1/calls 
  --header 'Content-Type: application/json' 
  --header 'authorization: <authorization>' 
  --data '{
  "phone_number": "+12223334455",
  "task": "A prompt up to 24k characters that instructs your phone agent what to do",
  "tools": [
    "A set of external APIs your phone agent can interact with during calls"
  ],
  "transfer_phone_number": "+16667778899",
  "voice_id": 123,
}'  
`;

export const javascript = `
fetch('https://api.bland.ai/v1/calls', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'authorization': '<authorization>'
    },
    body: JSON.stringify({
        phone_number: '+12223334455',
        task: 'A prompt up to 24k characters that instructs your phone agent what to do',
        tools: ['A set of external APIs your phone agent can interact with during calls'],
        transfer_phone_number: '+16667778899',
        voice_id: 123
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
`;

export const python = `
import requests
import json

url = 'https://api.bland.ai/v1/calls'
authorization = '<authorization>'  # Replace with your actual authorization token
data = {
   'phone_number': '+12223334455',
   'task': 'A prompt up to 24k characters that instructs your phone agent what to do',
   'tools': ['A set of external APIs your phone agent can interact with during calls'],
   'transfer_phone_number': '+16667778899',
   'voice_id': 123
}

headers = {
   'Content-Type': 'application/json',
   'Authorization': authorization
}

response = requests.post(url, headers=headers, data=json.dumps(data))

print(response.text)
`

export const csharp = `
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
   static async Task Main(string[] args)
   {
       using (var client = new HttpClient())
       {
           var request = new HttpRequestMessage(HttpMethod.Post, "https://api.bland.ai/v1/calls");

           request.Headers.Add("Authorization", "<authorization>");
           request.Headers.Add("Content-Type", "application/json");

           var json = @"{
               ""phone_number"": ""+12223334455"",
               ""task"": ""A prompt up to 24k characters that instructs your phone agent what to do"",
               ""tools"": [""A set of external APIs your phone agent can interact with during calls""],
               ""transfer_phone_number"": ""+16667778899"",
               ""voice_id"": 123
           }";

           request.Content = new StringContent(json, Encoding.UTF8, "application/json");

           try
           {
               var response = await client.SendAsync(request);
               response.EnsureSuccessStatusCode();
               var responseBody = await response.Content.ReadAsStringAsync();
               Console.WriteLine(responseBody);
           }
           catch (HttpRequestException e)
           {
               Console.WriteLine("nException Caught!");
               Console.WriteLine("Message :{0} ", e.Message);
           }
       }
   }
}
`

export const php = `
<?php

$url = 'https://api.bland.ai/v1/calls';
$authorization = "<authorization>"; // Replace with your actual authorization token
‍
$data = array( 
    'phone_number' => '+12223334455',
    'task' => 'A prompt up to 24k characters that instructs your phone agent what to do',
    'tools' => array('A set of external APIs your phone agent can interact with during calls'),
    'transfer_phone_number' => '+16667778899',
    'voice_id' => 123
);
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Authorization: ' . $authorization
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);

if (!$response) {
    die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
}

curl_close($ch);
echo $response;
?>
`

export const ruby = `
require 'net/http'
require 'json'
require 'uri'

url = URI.parse('https://api.bland.ai/v1/calls')
authorization = '<authorization>' # Replace with your actual authorization token

data = {
  phone_number: '+12223334455',
  task: 'A prompt up to 24k characters that instructs your phone agent what to do',
  tools: ['A set of external APIs your phone agent can interact with during calls'],
  transfer_phone_number: '+16667778899',
  voice_id: 123
}

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
request = Net::HTTP::Post.new(url.request_uri)
request['Content-Type'] = 'application/json'
request['Authorization'] = authorization
request.body = data.to_json

begin
  response = http.request(request)
  puts response.body
rescue StandardError => e
  puts "Error: #{e.message}"
end
`

export const java = `
import java.io.OutputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) {
        String urlString = "https://api.bland.ai/v1/calls";
        String authorization = "<authorization>"; // Replace with your actual authorization token
        String jsonData = "{" +
                "\"phone_number\": \"+12223334455\"," +
                "\"task\": \"A prompt up to 24k characters that instructs your phone agent what to do\"," +
                "\"tools\": [\"A set of external APIs your phone agent can interact with during calls\"]," +
                "\"transfer_phone_number\": \"+16667778899\"," +
                "\"voice_id\": 123" +
                "}";

        try {
            URL url = new URL(urlString);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("POST");
            con.setRequestProperty("Content-Type", "application/json");
            con.setRequestProperty("Authorization", authorization);
            con.setDoOutput(true);

            try (OutputStream os = con.getOutputStream()) {
                byte[] input = jsonData.getBytes(StandardCharsets.UTF_8);
                os.write(input, 0, input.length);
            }

            StringBuilder response = new StringBuilder();
            try (BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), StandardCharsets.UTF_8))) {
                String responseLine;
                while ((responseLine = br.readLine()) != null) {
                    response.append(responseLine.trim());
                }
            }
            System.out.println(response.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
`