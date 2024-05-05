export default function (user) {
  return {
    id: user.id,
    email: user.email,
    roleId: user.role,
    registeredAt: user.createdAt
      .toISOString()
      .substring(0, 16)
      .replace("T", " "),
  };
}
