import time

# O(n^2)
def brute_force(arr, perf = False):
    start = time.perf_counter_ns()

    maxSum = arr[0]
    for idx, val in enumerate(arr):
        sum = 0
        for j in range(idx, len(arr)):
            sum += arr[j]
            maxSum = max(maxSum, sum)

    stop = time.perf_counter_ns()

    if perf:
        listToStr = ','.join(str(x) for x in arr)
        mess = 'brute_force: [{}] took: {} ns'.format(listToStr, (stop-start))
        print(mess)

    return maxSum

# O(n)
def kadane_algo(arr, perf = False):
    start = time.perf_counter_ns()

    maxSum = localBest = arr[0]
    for val in arr[1:]:
        localBest = max( val, localBest + val )
        maxSum = max(localBest, maxSum)
        
    stop = time.perf_counter_ns()

    if perf:
        listToStr = ','.join(str(x) for x in arr)
        mess = 'kadane_algo: [{}] took: {} ns'.format(listToStr, (stop-start))
        print(mess)

    return maxSum