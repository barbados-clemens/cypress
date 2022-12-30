exports['experimentalSingleTabRunMode / executes all specs in a single tab'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:      1.2.3                                                                            │
  │ Browser:      FooBrowser 88                                                                    │
  │ Specs:        4 found (1_fails.cy.js, 2_foo.cy.js, 3_retries.cy.js, 999_final.cy.js)           │
  │ Searched:     **/*.cy.js                                                                       │
  │ Experiments:  experimentalSingleTabRunMode=true                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  1_fails.cy.js                                                                   (1 of 4)


  simple failing spec
    1) fails
    2) fails again


  0 passing
  2 failing

  1) simple failing spec
       fails:

      AssertionError: expected 1 to equal 2
      + expected - actual

      -1
      +2
      
      [stack trace lines]

  2) simple failing spec
       fails again:

      AssertionError: expected 1 to equal 3
      + expected - actual

      -1
      +3
      
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      2                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  2                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     1_fails.cy.js                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/1_fails.cy.js/simple failing spec -- fails (fai     (1280x720)
     led).png                                                                                       
  -  /XXX/XXX/XXX/cypress/screenshots/1_fails.cy.js/simple failing spec -- fails agai     (1280x720)
     n (failed).png                                                                                 


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 0 seconds                                                  

  -  Video output: /XXX/XXX/XXX/cypress/videos/1_fails.cy.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  2_foo.cy.js                                                                     (2 of 4)


  component
    ✓ passes


  1 passing

Warning: We failed to record the video.

This error will not alter the exit code.

Error: ffmpeg exited with code 1: /foo/bar/.projects/experimentalSingleTabRunMode/cypress/videos/2_foo.cy.js.mp4: No such file or directory

      [stack trace lines]

Warning: We failed processing this video.

This error will not alter the exit code.

Error: ffmpeg exited with code 1: /foo/bar/.projects/experimentalSingleTabRunMode/cypress/videos/2_foo.cy.js.mp4: No such file or directory

      [stack trace lines]


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     2_foo.cy.js                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  3_retries.cy.js                                                                 (3 of 4)


  retries
    (Attempt 1 of 2) passes after 1 failure
    ✓ passes after 1 failure


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     3_retries.cy.js                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 0 seconds                                                  

  -  Video output: /XXX/XXX/XXX/cypress/videos/3_retries.cy.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  999_final.cy.js                                                                 (4 of 4)


  ✓ verifies AUT is destroyed after each spec

  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     999_final.cy.js                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 0 seconds                                                  

  -  Video output: /XXX/XXX/XXX/cypress/videos/999_final.cy.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  1_fails.cy.js                            XX:XX        2        -        2        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  2_foo.cy.js                              XX:XX        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  3_retries.cy.js                          XX:XX        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  999_final.cy.js                          XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 4 failed (25%)                      XX:XX        5        3        2        -        -  


`
