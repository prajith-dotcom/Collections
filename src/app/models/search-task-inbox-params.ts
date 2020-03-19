export class SearchTaskInboxParams {
  WithOwner: boolean = false;
  WithoutOwner: boolean = false;

  clone(): SearchTaskInboxParams  {
    let ret = new SearchTaskInboxParams();
    ret.WithOwner = this.WithOwner;
    ret.WithoutOwner = this.WithoutOwner;
    return ret;
  }

}
