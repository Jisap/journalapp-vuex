 export default () => ({
    isLoading: true,
    entries:[
       {
         id: new Date().getTime(),
         date: new Date().toDateString(),
         text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
         picture: null,
      },
      {
         id: new Date().getTime() + 1000,
         date: new Date().toDateString(),
         text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
         picture: null,
      },
      {
         id: new Date().getTime() + 2000,
         date: new Date().toDateString(),
         text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
         picture: null,
      },
   ]
 })