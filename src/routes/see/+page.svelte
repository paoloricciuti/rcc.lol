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
		{#each data.links as link, i}
		<tr><td><a href="https://rcc.lol/{link}">{link}</a></td><td>{data.counts[i]}</td></tr>
			
		{/each}
	</tbody>
</table>