<!-- <script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Card from "$lib/components/Card.svelte";
<script lang="ts">
  export let borrowedBooks: Array<{
      id: string;
      borrowed_at: string;
      media: {
          id: string;
          title: string;
          authors: string;
          media_image: string;
      };
  }>;

  let notification: { message: string; type: 'success' | 'error' } | null = null;

  async function renewBook(bookId: string) {
      const response = await fetch('/api/renew-book', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookId, userId: 'currentUserId' }), 
      });

      const data = await response.json();
      if (data.success) {
          notification = { message: 'Book renewed successfully!', type: 'success' };
          setTimeout(() => (notification = null), 3000); 
      } else {
          notification = { message: 'Failed to renew book: ' + data.message, type: 'error' };
          setTimeout(() => (notification = null), 3000); 
      }
  }

  async function returnBook(bookId: string) {
      const response = await fetch('/api/return-book', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookId, userId: 'currentUserId' }), 
      });

      const data = await response.json();
      if (data.success) {
          notification = { message: 'Book returned successfully!', type: 'success' };
          setTimeout(() => (notification = null), 3000); 
      } else {
          notification = { message: 'Failed to return book: ' + data.message, type: 'error' };
          setTimeout(() => (notification = null), 3000); 
      }
  }
</script>

<div class="profile-page p-4">
  <h1 class="text-3xl font-bold mb-4">Your Borrowed Books</h1>

  {#if notification}
      <div class={`notification ${notification.type}`}>
          {notification.message}
      </div>
  {/if}

  {#if borrowedBooks.length > 0}
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each borrowedBooks as book}
              <li class="border p-4 rounded shadow bg-white">
                  <img
                      src={book.media.media_image}
                      alt="{book.media.title}"
                      class="w-full h-48 object-cover rounded"
                  />
                  <h2 class="text-xl font-semibold mt-2">{book.media.title}</h2>
                  <p class="text-gray-500">{book.media.authors}</p>
                  <p class="text-sm mt-1">
                      <strong>Borrowed At:</strong> {new Date(book.borrowed_at).toLocaleDateString()}
                  </p>

                  <div class="flex justify-between mt-4">
                      <button
                          on:click={() => renewBook(book.id)}
                          class="btn btn-primary"
                      >
                          Renew for 30 Days
                      </button>
                      <button
                          on:click={() => returnBook(book.id)}
                          class="btn btn-secondary"
                      >
                          Return Book
                      </button>
                  </div>
              </li>
          {/each}
      </ul>
  {:else}
      <p class="text-gray-500">You have no borrowed books.</p>
  {/if}
</div>

<style>
  .profile-page {
      max-width: 1200px;
      margin: auto;
  }

.banner {
  background-color: #4a90e2;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.avatar img {
  object-fit: cover;
}

h1 {
  color: white;
}

p {
  color: #718096;
}
</style> -->
