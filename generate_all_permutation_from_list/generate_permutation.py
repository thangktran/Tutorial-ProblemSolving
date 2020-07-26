# Heap's Algo
def heap_algo(elems):
    pass

# -- Algo from Cracking The Coding Interview
def get_permutation(elems):
    result = []
    get_permutaiton_helper(elems, [], result)
    return result

def get_permutaiton_helper(elems, previousElems, result):
    if len(elems) == 0:
        result.append(previousElems)
    else:
        for idx in range(0, len(elems)):
            newElems = elems[:idx] + elems[idx+1:]
            get_permutaiton_helper(newElems, [elems[idx]] + previousElems, result)