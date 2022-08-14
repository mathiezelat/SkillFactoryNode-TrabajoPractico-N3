const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllCategories = async () => {
	const allCategories = await prisma.category.findMany({
		include: {
			posts: true,
		},
	})
	return allCategories
}

const getOneCategory = async categoryId => {
	const category = await prisma.category.findUnique({
		where: {
			id: categoryId,
		},
		include: {
			posts: true,
		},
	})
	return category
}

const createNewCategory = async newCategory => {
	const createdCategory = await prisma.category.create({
		data: newCategory,
		include: {
			posts: true,
		},
	})
	return createdCategory
}

const updateCategory = async (categoryId, updateCategory) => {
	const updatedCategory = await prisma.category.update({
		where: {
			id: categoryId,
		},
		data: updateCategory,
		include: {
			posts: true,
		},
	})
	return updatedCategory
}

const deleteCategory = async categoryId => {
	const deletedCategory = await prisma.category.delete({
		where: {
			id: categoryId,
		},
		include: {
			posts: true,
		},
	})
	return deletedCategory
}

module.exports = {
	getAllCategories,
	getOneCategory,
	createNewCategory,
	updateCategory,
	deleteCategory,
}
