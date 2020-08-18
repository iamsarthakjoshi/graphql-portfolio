import { queryType, idArg } from '@nexus/schema';
import { data } from 'src/data';
import { Bio, Position } from './index';

export const Query = queryType({
  definition(t) {
    t.field('bio', {
      type: Bio,
      description: 'My Bio.',
      resolve: (root, args, ctx) => data.bio,
    });

    t.list.field('positions', {
      type: Position,
      description: 'List of Positions.',
      resolve: () => data.positions,
    });

    t.field('position', {
      type: Position,
      description: 'Find a position by ID.',
      nullable: true,
      args: { id: idArg() },
      resolve: (root, args, ctx) =>
        data.positions.find((position) => position.id === args.id),
    });
  },
});
