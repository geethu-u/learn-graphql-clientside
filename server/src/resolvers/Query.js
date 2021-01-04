async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } }
        ]
      }
    : {};

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const count = await context.prisma.link.count({ where });

  return {
    id: 'main-feed',
    links,
    count
  };
}
async function userlist(parent, args, context, info) {


  const users = await context.prisma.user.findMany();

  const count = await context.prisma.user.count();

  return {
    id: 'user-feed',
    users,
    count
  };
}

module.exports = {
  feed,
  userlist
};
