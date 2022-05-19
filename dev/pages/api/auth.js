const auth_header = {
  headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
}

export default auth_header;