export const productsSelector = (state) => state.productsState.products;
export const isUpdatedProductsSelector = (state) =>
	state.productsState.isUpdatedProducts;
export const currentProductSelector = (state) =>
	state.productsState.currentProduct;
export const filteredProductsSelector = (state) =>
	state.productsState.filteredProducts;
export const currentCategorySelector = (state) =>
	state.catalogState.currentCategory;
export const filterPanelTypeListSelector = (state) =>
	state.catalogState.filterPanelTypelist;
export const checkedIdsArrSelector = (state) =>
	state.catalogState.checkedIdsArr;
export const isLoadingSelector = (state) => state.catalogState.isLoading;
export const searchPhraseSelector = (state) => state.searchState.searchPhrase;
export const shouldSearchSelector = (state) => state.searchState.shouldSearch;
export const lastPageSelector = (state) => state.catalogState.lastPage;
export const userSelector = (state) => state.userState.user;
export const infoMessageSelector = (state) => state.userState.infoMessage;
export const favouritesSelector = (state) => state.userState.favourites;
export const errorServerFormSelector = (state) =>
	state.errorState.serverErrorForm;
export const routeErrorSelector = (state) => state.errorState.routeError;
export const connectionErrorSelector = (state) =>
	state.errorState.connectionError;
export const modalTextSelector = (state) => state.modalState.modalText;
export const isOpenModalSelector = (state) => state.modalState.isOpenModal;
export const currentIdSelector = (state) => state.modalState.currentId;
export const bagProductsArrSelector = (state) => state.bagState.bagProductsArr;
