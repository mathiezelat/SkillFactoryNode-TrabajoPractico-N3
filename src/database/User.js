const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllUsers = async () => {
	const allUsers = await prisma.user.findMany({
		include: {
			posts: {
				include: {
					categories: true,
				},
			},
		},
	})
	return allUsers
}

const getOneUser = async userId => {
	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
		include: {
			posts: {
				include: {
					categories: true,
				},
			},
		},
	})
	return user
}

const createNewUser = async newUser => {
	const createdUser = await prisma.user.create({
		data: newUser,
		include: {
			posts: {
				include: {
					categories: true,
				},
			},
		},
	})
	return createdUser
}

const updateUser = async (userId, updateUser) => {
	const updatedUser = await prisma.user.update({
		where: {
			id: userId,
		},
		data: updateUser,
		include: {
			posts: {
				include: {
					categories: true,
				},
			},
		},
	})
	return updatedUser
}

const deleteUser = async userId => {
	const deletedUser = await prisma.user.delete({
		where: {
			id: userId,
		},
		include: {
			posts: {
				include: {
					categories: true,
				},
			},
		},
	})
	return deletedUser
}

module.exports = {
	getAllUsers,
	getOneUser,
	createNewUser,
	updateUser,
	deleteUser,
}
