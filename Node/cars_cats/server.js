app.use( "/product" , mymiddleware);
// will match /product
// will match /product/cool
// will match /product/foo

app.all( "/product" , handler);
// will match /product
// won't match /product/cool   <-- important
// won't match /product/foo    <-- important

app.all( "/product/*" , handler);
// won't match /product        <-- Important
// will match /product/cool
// will match /product/foo

2 15 14 25 17 20 18 12 10 2
