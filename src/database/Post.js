const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllPosts = async () => {
	const allPost = await prisma.post.findMany()
	return allPost
}

const getOnePost = async postId => {
	const post = await prisma.post.findUnique({
		where: {
			id: postId,
		},
	})
	return post
}

const createNewPost = async newPost => {
	const createdPost = await prisma.post.create({
		data: newPost,
	})
	return createdPost
}

const updatePost = async (postId, updatePost) => {
	const updatedPost = await prisma.post.update({
		where: {
			id: postId,
		},
		data: updatePost,
	})
	return updatedPost
}

const deletePost = async postId => {
	const deletedPost = await prisma.post.delete({
		where: {
			id: postId,
		},
	})
	return deletedPost
}

module.exports = {
	getAllPosts,
	getOnePost,
	createNewPost,
	updatePost,
	deletePost,
}
