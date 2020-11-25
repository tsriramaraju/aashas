import { Types } from "mongoose";
import { User } from "../../models/Users";
import { addFavourite } from "../addFavourites";

describe('Add Favourites items service test group', () => {
  it('should add item successfully if item is not present in users data', async () => {
    await global.userLogin();
    const user = await User.findOne().lean();
    expect(user?.favourites?.length).toBe(0);

    const status = await addFavourite({
      prodId: Types.ObjectId(),
      userId: user?._id,
    });

    expect(status).toBe('Favourite added successfully');
    const user1 = await User.findOne().lean();

    expect(user1?.favourites?.length).toBe(1);
  });

  it('should not add duplicate entry if item  already exists', async () => {
    await global.userLogin();
    const user = await User.findOne().lean();
    expect(user?.favourites?.length).toBe(0);

    const id = Types.ObjectId();
    const status = await addFavourite({ prodId: id, userId: user?._id });
    const status1 = await addFavourite({ prodId: id, userId: user?._id });

    expect(status).toBe('Favourite added successfully');
    expect(status1).toBe('Favourite added successfully');
    const user1 = await User.findOne().lean();

    expect(user1?.favourites?.length).toBe(1);
  });
});