##  The scripts needed to test/start/build your application
    
    npm install => installing node modules

    npm run jasmine => run unit testing 

    npm run befortest => run ts lint and fix type script errors then build typescript files to convert to js files in dist folder

   ## Any endpoints that should be accessed to test that you have created the required functionality.
   
     http://localhost:3000/api/images?filename=encenadaport&width=200&height=300   
     parmaters  (filename ,width ,height)
     Request type : GET
     => response with resized image with new dimensions

     http://localhost:3000/ => response welcome page
     No parmaters 
     Request type : GET

   ## Any other functionality you have included in the project to ensure the reviewer knows what to expect
     Typescript 
     NodeJS 
     Express server
     Sharp was used for the image processing
     Jasmine unit testing
