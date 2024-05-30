import { ERROR } from "../../constants/error-message";
import {
	AdminPage,
	Authorization,
	Bag,
	MainPage,
	NewPassword,
	ProductPage,
	Register,
	ResetPassword,
} from "../../page";
import { CatalogWithAllProducts } from "../../page/catalog-with-all-products/CatalogWithAllProducts";
import { CatalogWithProductsCategory } from "../../page/catalog-with-products-category/CatalogWithProductsCategory";
import { ErrorPage } from "../../page/error-page/Error-page";
import { FavouritesPage } from "../../page/favourites-page/Favourites-page";

export const routesPath = [
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/catalog",
		element: <CatalogWithAllProducts />,
	},
	{
		path: "/catalog/:idCategory",
		element: <CatalogWithProductsCategory />,
	},
	{
		path: "/catalog/:idCategory/:productId",
		element: <ProductPage />,
	},
	{
		path: "/catalog/allProducts/:productId",
		element: <ProductPage />,
	},
	{
		path: "/login",
		element: <Authorization />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/bag",
		element: <Bag />,
	},
	{
		path: "/favourites-page",
		element: <FavouritesPage />,
		isAuth: true,
		roles: [0, 1, 2],
	},
	{
		path: "/adminPage",
		element: <AdminPage />,
		isAuth: true,
		roles: [0, 1],
	},

	{
		path: `/auth/password/:resetToken`,
		element: <NewPassword />,
	},
	{
		path: "/login/password",
		element: <ResetPassword />,
	},
	{
		path: "/error",
		element: <ErrorPage />,
	},
	{
		path: "/*",
		element: <ErrorPage error={ERROR.NOT_FOUND} />,
	},
];
