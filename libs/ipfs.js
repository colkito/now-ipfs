import IPFS from 'ipfs-mini'

const ipfs = new IPFS({
  protocol: 'https',
  host: 'ipfs.infura.io',
  port: 5001
})

export const add = buf => {
  return new Promise((resolve, reject) => {
    ipfs.add(buf, (err, result) => {
      if (err) {
        return reject(err)
      }

      const url = `https://ipfs.io/ipfs/${result}`
      resolve(url)
    })
  })
}
