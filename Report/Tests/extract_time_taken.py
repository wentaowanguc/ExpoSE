import re
import sys
import statistics
import numpy as np

regex = re.compile(r"(?:took )(\d+.\d+)s")
times = []

with open(sys.argv[1]) as f:
	for line in f:
		match = regex.search(line)
		if '*-- Test Case' in line:
			if match is not None:
				times.append(float(match.group(1)))

median = round(statistics.median(times), 2)
ninty_percentile = round(np.percentile(times, 90), 2)
max_time = round(max(times), 2)

print('Median: ' + str(median) + 's')
print('90 Percentile: ' + str(ninty_percentile) + 's')
print('Max: ' + str(max_time) + 's')