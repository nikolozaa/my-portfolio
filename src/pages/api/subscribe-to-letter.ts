import { NextApiRequest, NextApiResponse } from "next";
import client from "@sendgrid/client";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	console.log(req.body, "<---- req body");
	if (req.method != "POST") {
		return res.json({
			success: false,
		});
	}

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const validEmail = emailRegex.test(req.body.email);

	if (!validEmail) {
		return res.json({
			success: false,
		});
	}

	try {
		await createContact(
			req.body.email,
			req.body.firstname,
			req.body.lastname,
			req.body.bio,
		);
		return res.status(200).json({ success: true });
	} catch {
		return res.json({
			success: false,
		});
	}
}

export const createContact = async (
	email: string,
	firstname: string,
	lastname: string,
	bio: string,
) => {
	try {
		client.setApiKey(
			"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",
		);
		const data = {
			list_ids: ["c331df2a-6f7d-4b86-a9e3-7e01aa63e8ba"],
			contacts: [
				{
					email: email,
					first_name: firstname,
					last_name: lastname,
					custom_fields: {
						e6_T: bio,
					},
				},
			],
		};
		client
			.request({
				url: `/v3/marketing/contacts`,
				method: "PUT",
				body: data,
			})
			.then(([response, body]) => {
				console.log(response.statusCode, "<---- create contact status code");
				console.log(response.body, "AQ MTAVRDEBA");
			})
			.catch((error) => {
				console.error(error);
			});
	} catch (err) {
		console.log(err);
	}
};

//   import { NextApiRequest, NextApiResponse } from 'next';
// import client from '@sendgrid/client';

// // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //    console.log(req.body.email , "LALALALALALL")
// //   if(req.method != "POST"){
// //     return res.json({
// //       success: false
// //     });
// //   }
// //   if(req.body.email !== "dzungi@asd.ge"){
// //     return res.json({
// //       success: false
// //     });
// //   }
// //   try{
// //     await createContact(req.body.email)
// //     return res.status(200).json({ success: true })
// //   }catch {
// //     return res.json({
// //       success: false
// //     });
// //   }

// // }

// export const createContact = async (email : string) => {

//       client.setApiKey("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");
//       const data = {
//         "contacts": [
//           {
//             "email": email,
//           }
//         ]
//       };

//       const request = {
//         url: `/v3/marketing/contacts`,
//         httpMethod: 'PUT',
//         body: data
//       }

// const [response] = await client.request(request);
// console.log(response.statusCode);
// console.log(response.body);

//     client.request(request)
// .then(([response, body]) => {
//   console.log(response.statusCode);
//   console.log(response.body);
// })
// .catch(error => {
//   console.error(error);
// })
// };
