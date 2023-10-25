class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.items = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.items.length;
  }
  pageCount() {
    // returns the number of pages
    const pages = this.items.length / this.itemsPerPage;
    return Math.ceil(pages);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    const pages = this.items.length / this.itemsPerPage;
    if (pageIndex >= Math.ceil(pages) || pageIndex < 0) return -1;

    if (this.itemsPerPage * (pageIndex + 1) > this.items.length)
      return this.items.length % this.itemsPerPage;
    else return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range

    if (itemIndex >= this.items.length || itemIndex < 0) return -1;

    var page = 0;
    for (var i = 0; i < this.items.length; i += this.itemsPerPage) {
      if (i + this.itemsPerPage >= itemIndex + 1) return page;
      page++;
    }
  }
}
