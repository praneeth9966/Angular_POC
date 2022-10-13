// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { WelcomeComponent } from './welcome.component';

// describe('WelcomeComponent', () => {
//   let component: WelcomeComponent;
//   let fixture: ComponentFixture<WelcomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ WelcomeComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(WelcomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it(`should have as title 'Welcome'`, () => {
//     const fixture = TestBed.createComponent(WelcomeComponent);
//     const app = fixture.componentInstance;
//     expect(app.pageTitle).toEqual('Welcome');
//   });

//   describe('compute', ()=> {
//     it('shouble return 0 if number is negative', ()=> {
//         const result = component.compute(-1);
//         expect(result).toBe(0);
//     })
//     it('shouble increment if number is positive', ()=> {
//       const result = component.compute(1);
//       expect(result).toBe(2);
//   })
//   })

//   describe('greet', ()=> {
//     it('shouble include name in the message', ()=> {
//         expect(component.greet('praneeth')).toContain('praneeth');
//     })
//   })

//   describe('getCurruncies', ()=> {
//     it('shouble return the supported curruncies', ()=> {
//       const result = component.getCurruncies();
//       expect(result).toContain('usd');
//       expect(result).toContain('aur');
//       expect(result).toContain('rupee');
//     })
//   })

//   describe('getCurruncies', ()=> {

//     beforeEach(() => {
//       component.totalVotes = 0;
//     });
  
//     afterEach(() => {
//       component.totalVotes = 0;
//     });
//     it('shouble increment when calling the upVote', ()=> {
//       component.upVote();
//       expect(component.totalVotes).toBe(1);
//     })
//     it('shouble decrement when calling the downVote', ()=> {
//       component.downVote();
//       expect(component.totalVotes).toBe(0);
//     })
//   })

//   describe('FormatDivider', ()=> {
//     it('should return true when index is less than length-1', () => {
//         expect(component.formatDivider(1, 5)).toBe(true);
//     })

//     it('should return false when index is greater than length-1', () => {
//       expect(component.formatDivider(5, 1)).toBe(false);
//     }) 
//   })

//   //testing for simple class

//   describe('isAuthenticated', ()=> {
  
//     afterEach(() => { (2)
//       component = null;
//       localStorage.removeItem('token');
//     });
//     it('should return true from isAuthenticated when there is a token', () => { (1)
//       localStorage.setItem('token', '1234'); (2)
//       expect(component.isAuthenticated()).toBeTruthy();
//     });
//     it('should return false from isAuthenticated when there is no token', () => {
//       expect(component.isAuthenticated()).toBeFalsy();
//     });
//   })


  

// });
