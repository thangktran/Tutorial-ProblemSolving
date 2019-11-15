# Given a base-10 integer n, convert it to binary and return the
# maximum number of consecutive 1 in n.

import time

def bit_shift(n, perf = False):
    start = time.perf_counter_ns()

    best = 0
    localBest = 0
    for i in range(0, n.bit_length()):
        shiftedNumber = n >> i
        isOne = shiftedNumber & 1

        if isOne:
            localBest = localBest + 1

        if (not isOne) or (i == n.bit_length()-1):
            best = max(best, localBest)
            localBest = 0

    stop = time.perf_counter_ns()

    if perf:
        mess = 'bit_shift({}) took: {} ns'.format(n, (stop-start))
        print(mess)

    return best


def string_split(n, perf = False):
    start = time.perf_counter_ns()
    result = max(len(e) for e in bin(n)[2:].split('0'))
    stop = time.perf_counter_ns()

    if perf:
        mess = 'string_split({}) took: {} ns'.format(n, (stop-start))
        print(mess)

    return result