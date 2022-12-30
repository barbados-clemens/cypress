exports['e2e web security / when enabled / fails'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (web_security.cy.js)                                                       │
  │ Searched:   cypress/e2e/web_security.cy.js                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  web_security.cy.js                                                              (1 of 1)


  web security
    1) fails when clicking <a> to another origin
    2) fails when submitted a form and being redirected to another origin
    3) fails when using a javascript redirect to another origin
    4) fails when doing a CORS request cross-origin
    ✓ finds the correct spec bridge even if a previous spec bridge host is a subset of the current host


  1 passing
  4 failing

  1) web security
       fails when clicking <a> to another origin:

      Timed out retrying after 4000ms
      + expected - actual

      +'https://www.foo.com:44665/cross_origin'
      
      [stack trace lines]

  2) web security
       fails when submitted a form and being redirected to another origin:

      Timed out retrying after 4000ms
      + expected - actual

      +'https://www.foo.com:44665/cross_origin'
      
      [stack trace lines]

  3) web security
       fails when using a javascript redirect to another origin:

      Timed out retrying after 4000ms
      + expected - actual

      +'https://www.foo.com:44665/cross_origin'
      
      [stack trace lines]

  4) web security
       fails when doing a CORS request cross-origin:
     AssertionError: Timed out retrying after 500ms: Expected to find content: 'success!' but never did.
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      4                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  4                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     web_security.cy.js                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/web_security.cy.js/web security -- fails when c     (1280x720)
     licking a to another origin (failed).png                                                       
  -  /XXX/XXX/XXX/cypress/screenshots/web_security.cy.js/web security -- fails when s     (1280x720)
     ubmitted a form and being redirected to another origin (failed).png                            
  -  /XXX/XXX/XXX/cypress/screenshots/web_security.cy.js/web security -- fails when u     (1280x720)
     sing a javascript redirect to another origin (failed).png                                      
  -  /XXX/XXX/XXX/cypress/screenshots/web_security.cy.js/web security -- fails when d     (1280x720)
     oing a CORS request cross-origin (failed).png                                                  


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 1 second                                                   

  -  Video output: /XXX/XXX/XXX/cypress/videos/web_security.cy.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  web_security.cy.js                       XX:XX        5        1        4        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        5        1        4        -        -  


`

exports['e2e web security / when disabled / passes'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (web_security.cy.js)                                                       │
  │ Searched:   cypress/e2e/web_security.cy.js                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  web_security.cy.js                                                              (1 of 1)


  web security
    ✓ fails when clicking <a> to another origin
    ✓ fails when submitted a form and being redirected to another origin
    ✓ fails when using a javascript redirect to another origin
    ✓ fails when doing a CORS request cross-origin
    ✓ finds the correct spec bridge even if a previous spec bridge host is a subset of the current host


  5 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      5                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     web_security.cy.js                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 0 seconds                                                  

  -  Video output: /XXX/XXX/XXX/cypress/videos/web_security.cy.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  web_security.cy.js                       XX:XX        5        5        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        5        5        -        -        -  


`
