<h2>ANSWER FOR THE GIVEN QUESTIONS</h2><hr>
<ol>
<li>What is the difference between <strong>getElementById, getElementsByClassName, and querySelector / querySelectorAll</strong>?</li>
  <p>Answer:
- **getElementById** → শুধু একটি element কে `id` দিয়ে সিলেক্ট করে। সবসময় একটাই element ফেরত দেয়।  
- **getElementsByClassName** → নির্দিষ্ট ক্লাস নামের সব element কে সিলেক্ট করে। এটি একটি *লাইভ HTMLCollection* রিটার্ন করে, মানে DOM পরিবর্তন হলে লিস্টও পরিবর্তন হবে।  
- **querySelector** → কোনো CSS selector (id, class, tag ইত্যাদি) এর প্রথম element সিলেক্ট করে।  
- **querySelectorAll** → কোনো CSS selector এর সব element সিলেক্ট করে এবং *স্ট্যাটিক NodeList* ফেরত দেয় (DOM পরিবর্তন হলেও লিস্ট পরিবর্তন হয় না)।  
  </p>
<li>How do you <strong>create and insert a new element into the DOM</strong>?</li>
    <p>Answer:১. document.createElement("tagName") দিয়ে নতুন element তৈরি করতে হয়।  
২. এরপর textContent, setAttribute বা style যোগ করে কাস্টমাইজ করতে হয়।  
৩. DOM এ যুক্ত করার জন্য appendChild(), prepend(), before(), after() এর মতো মেথড ব্যবহার করা হয়।</p>
<li>What is <strong>Event Bubbling</strong> and how does it work?</li>
    <p>Answer:</p>
<li>What is <strong>Event Delegation</strong> in JavaScript? Why is it useful?</li>
    <p>Answer:</p>
<li>What is the difference between <strong>preventDefault() and stopPropagation()</strong> methods?</li>
    <p>Answer:</p>
</ol>

