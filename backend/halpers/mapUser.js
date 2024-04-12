export default function (user) {
  return {
    id: user.id,
    login: user.login,
    roleId: user.role,
    registeredAt: user.createdAt
      .toISOString()
      .substring(0, 16)
      .replace("T", " "),
  };
}
