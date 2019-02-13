function hello () {
  console.log(`Hello from ${process.server ? 'Server' : 'Client'} !`)
}

export default hello
