import { Prisma } from "prisma-binding";
import getUserId from "../utils/getUserId";

const User = {
  posts: {
    fragment: "fragment userId on User {id}",
    resolve(parent, args, ctx, info) {
      return Prisma.query.posts({
        where: {
          published: true,
          author: {
            id: parent.id,
          },
        },
      });
    },
  },

  email: {
    fragment: "fragment userId on User {id}",
    resolve(parent, args, ctx, info) {
      const userId = getUserId(request, false);

      if (userId && userId === parent.id) {
        return parent.id;
      } else {
        return null;
      }
    },
  },
};

export { User as default };
