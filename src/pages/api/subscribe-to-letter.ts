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
		await createContact(req.body.email);
		return res.status(200).json({ success: true });
	} catch {
		return res.json({
			success: false,
		});
	}
}

export const createContact = async (email: string) => {
	try {
		client.setApiKey(
			"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",
		);
		const data = {
			list_ids: ["e5b7cfc4-77ef-4702-83b5-90e35d911ddc"],
			contacts: [
				{
					email: email,
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
