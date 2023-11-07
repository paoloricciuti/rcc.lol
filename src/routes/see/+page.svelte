<script lang="ts">
	import "@picocss/pico";
	export let data;
</script>


<table>
	<thead>
		<tr>
			<th><strong>Shortener</strong></th>
			<th><strong>Count</strong></th>
		</tr>
	</thead>
	<tbody>
		{#each data.links as link}
		<tr><td>{link[0]}</td><td>{link[1]}</td></tr>
			
		{/each}
	</tbody>
</table>