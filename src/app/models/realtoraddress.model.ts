export class RealtorAddress {
    addressId!: number;
  subCity: string;
  district: string;
  houseNo: string;
  blockName: string;

  constructor(addressId:number, subCity: string, district: string, houseNumber: string, blockName: string) {
    this.addressId = addressId;
    this.subCity = subCity;
    this.district = district;
    this.houseNo = houseNumber;
    this.blockName = blockName;
  }
}

