module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
  },
  npm: {
    publish: false,
  },
  github: {
    release: false,
  },
  gitlab: {
    release: false,
  },
  hooks: {
    "before:init": "yarn run test",
    "after:git:release": "git push origin main:release -f"
  }
};
