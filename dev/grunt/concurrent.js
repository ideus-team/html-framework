module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Tasks
    // all tasks inside one section run in parallel!
    
    // CSS    
    css_preprocess: [
        'newer:sass:prod'
    ],
    css_postprocess: [
        'newer:csslint'        
    ],   
    css_min: [
        
    ],    
  
    // JS
    js_preprocess: [
        'newer:jshint',      
    ],     
    js_postprocess: [
        
    ],   
    js_merge: [
        'newer:concat',        
    ],      
    js_min: [
        'newer:uglify'        
    ],      

    // Image tasks
    imgMin: [
        'newer:imagemin'
    ]
};
