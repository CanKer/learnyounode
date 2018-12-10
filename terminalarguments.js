console.log(process.argv.map((data, idx) => {return (idx >= 2) ? Number.parseInt(data) : 0}).filter(e => e !== 0).reduce((a,b)  =>  a+b));
