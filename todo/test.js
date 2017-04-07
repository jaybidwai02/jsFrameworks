require('babel-register')({
	presets:['es2015','react','stage-2']
});

// import express from 'express';
const express = require('express');

var app = express();

app.listen(3000, ()=>{
	console.log('Listining...');
})