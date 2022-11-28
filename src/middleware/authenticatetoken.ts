import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';

export const authenticate =
  () => (next: any) => (root: any, args: any, ctx: any, info: any) => {
    const secret = process.env.JWT_SECRET || 'secret';
    if (!ctx.token) {
      throw new GraphQLError('You are not authenticated!', {
        extensions: {
          code: 'USER_NOT_AUTHENTICATED',
          http: {
            status: 401,
          },
        },
      });
    }
    try {
      const tsplit = ctx.token.split(' ');
      var decoded = jwt.verify(tsplit[1], secret);
      ctx.currentUser = decoded;
    } catch (err) {
      throw new GraphQLError('Invalid token or token expired!', {
        extensions: {
          code: 'INVALID_TOKEN',
          http: {
            status: 403,
          },
        },
      });
    }

    return next(root, args, ctx, info);
  };
