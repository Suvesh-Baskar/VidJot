if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: 'mongodb://Admin:admin1234@ds255784.mlab.com:55784/vidjot-prod',
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev',
    }    
}