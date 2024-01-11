import { UserProfile } from "../models/Profile"
import { auth } from "../firebaseConfig"
import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL
const getToken = async (): Promise<string> => {
	if (!auth.currentUser) throw new Error()
	return await auth.currentUser.getIdToken(true)
}

export const getUsers = async (): Promise<UserProfile[]> =>
	{
		const users = await axios.get(baseUrl + "/user", {
			// headers: {
			// 	Authorization: `Bearer ${await getToken()}`
			// }
		})
	return users.data}

export const getUser = async (id: string): Promise<UserProfile> =>
	(
		await axios.get(baseUrl + "/user/" + encodeURIComponent(id), {
			headers: {
				Authorization: `Bearer ${await getToken()}`
			}
		})
	).data

export const postUser = async (item: UserProfile): Promise<UserProfile> =>
	(
		await axios.post(baseUrl + "/user", item, {
			headers: {
				Authorization: `Bearer ${await getToken()}`
			}
		})
	).data

export const putUser = async (
	id: string,
	item: UserProfile
): Promise<UserProfile> =>
	(
		await axios.post(
			baseUrl + "/user/" + encodeURIComponent(id),
			item,
			{
				headers: {
					Authorization: `Bearer ${await getToken()}`
				}
			}
		)
	).data

export const deleteUser = async (id: string): Promise<void> =>
	await axios.delete(baseUrl + "/user/" + encodeURIComponent(id), {
		headers: {
			Authorization: `Bearer ${await getToken()}`
		}
	})

export const updateUserProfileBackend = async (user: UserProfile): Promise<UserProfile> => {
    return await axios.put(baseUrl + "/user/" + encodeURIComponent(user.id), user)
}
