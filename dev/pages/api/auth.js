const auth_header = {
  headers: { Authorization: `${process.env.GITHUB_TOKEN}` }
}

export default auth_header;