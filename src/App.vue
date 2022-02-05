<template>
  <el-config-provider :locale="zhCn">
    <el-container class="min-h-screen">
      <el-header
        class="fixed top-0 left-0 z-10 flex h-[100px] w-full flex-col items-center justify-center bg-white"
      >
        <el-row>
          <el-link href="https://www.millcloud.cn" target="_blank" rel="noreferrer">
            <el-image src="/logo.png" class="mr-2 h-[30px] w-[166px]" />
          </el-link>
          <h1 class="text-3xl font-bold">前端测试</h1>
        </el-row>
        <span>v{{ pkg.version }}</span>
        <el-row align="middle" justify="center">
          <el-space>
            <el-link type="primary" :href="`https://github.com/${pkg.author}/${pkg.name}`">
              Github Repo
            </el-link>
            <el-link type="primary" :href="`https://gitee.com/${pkg.author}/${pkg.name}`">
              Gitee Repo
            </el-link>
            <el-link type="primary" :href="`https://${pkg.author}.github.io/${pkg.name}`">
              Github Page
            </el-link>
            <el-link type="primary" :href="`https://${pkg.author}.gitee.io/${pkg.name}`">
              Gitee Page
            </el-link>
          </el-space>
        </el-row>
      </el-header>
      <el-main class="min-h-screen pt-[100px]">
        <el-space direction="vertical" size="large" fill class="w-full">
          <h3 class="text-2xl font-medium">目的</h3>
          <p>
            我们深知笔试和面试都避开了你这位开发者真正的日常，也就是<strong>让你在你熟悉的电脑环境上工作</strong>。这可能让你在笔试和面试时的表现有失水准。
          </p>
          <p>
            因此，我们增加了机试的环节，希望你可以<strong>更全面、更综合地展现代码能力</strong>。但机试不是必须的环节，你也可以选择不接受机试，我们将根据笔试和面试表现来判断。
          </p>
          <p>我们希望你能<strong>满足我们以下要求</strong>。</p>
          <ul>
            <li>独立思考，独立完成，不要抄袭。</li>
            <li>大部分代码易读、整洁。</li>
            <li>少量晦涩难懂的代码有注释说明。</li>
          </ul>
          <p><strong>你要做的事情</strong>并不复杂：</p>
          <ul>
            <li>挑选一些预设题目。</li>
            <li>自主完成这些题目。</li>
            <li>记录完成每一道题目的用时。</li>
            <li>
              完成后放到
              <el-link type="primary" href="https://github.com/" target="_blank"> Github </el-link>
              或者
              <el-link type="primary" href="https://gitee.com/" target="_blank"> Gitee </el-link
              >，并提供访问链接。
            </li>
            <li>等待结果。</li>
          </ul>
          <p>你可以<strong>在以下范围内任意搜索资料</strong>。</p>
          <ul>
            <li>
              Vue 2
              <el-link type="primary" href="https://cn.vuejs.org/" target="_blank">
                中文官网
              </el-link>
              和
              <el-link type="primary" href="https://vuejs.org/" target="_blank">英文官网</el-link>
            </li>
            <li>
              Vue 3
              <el-link type="primary" href="https://v3.cn.vuejs.org/" target="_blank">
                中文官网
              </el-link>
              和
              <el-link type="primary" href="https://v3.vuejs.org/" target="_blank">
                英文官网
              </el-link>
            </li>
            <li>
              React
              <el-link type="primary" href="https://zh-hans.reactjs.org/" target="_blank">
                中文官网
              </el-link>
              和
              <el-link type="primary" href="https://reactjs.org/" target="_blank">英文官网</el-link>
            </li>
            <li>
              <el-link type="primary" href="https://developer.mozilla.org/" target="_blank">
                MDN
              </el-link>
            </li>
            <li>
              <el-link type="primary" href="https://github.com/" target="_blank"> Github </el-link>
            </li>
            <li>
              <el-link type="primary" href="https://gitee.com/" target="_blank"> Gitee </el-link>
            </li>
            <li>使用到的周边库的官方文档</li>
          </ul>
          <div class="my-4" />
          <h3 class="text-2xl font-medium">题目</h3>
          <h4 class="text-xl font-medium">第一部分</h4>
          <p>
            在第一部分，请使用<strong>原生 JavaScript / TypeScript 完成你会的题目</strong
            >，完成的每一个题目对应一个文件提交。
          </p>
          <el-skeleton v-if="isLoadingPartOneContent" animated />
          <el-result
            v-else-if="partOneContentErrors.length > 0"
            icon="error"
            title="Error"
            :sub-title="partOneContentErrors.join('<br/>')"
          />
          <el-collapse v-else accordion>
            <el-collapse-item
              v-for="(nameItem, nameIndex) of partOneNames"
              :key="nameItem.value"
              :title="nameItem.label"
            >
              <el-tabs v-if="partOneExtensions.length > 1">
                <el-tab-pane
                  v-for="(extensionItem, extensionIndex) of partOneExtensions"
                  :key="extensionItem.value"
                  :label="extensionItem.label"
                >
                  <markdown-it
                    breaks
                    xhtml-out
                    typographer
                    linkify
                    html
                    :highlight="{ hljs }"
                    :source="
                      partOneContents[nameIndex * partOneExtensions.length + extensionIndex] ?? ''
                    "
                  />
                </el-tab-pane>
              </el-tabs>
              <markdown-it
                v-else
                breaks
                xhtml-out
                typographer
                linkify
                html
                :highlight="{ hljs }"
                :source="partOneContents[nameIndex] ?? ''"
              />
            </el-collapse-item>
          </el-collapse>
          <h4 class="text-xl font-medium">第二部分</h4>
          <p>
            在第二部分，请使用以下任意一个基本技术栈完成最少 1
            个题目，完成每一个题目对应一个文件夹提交。
          </p>
          <ul>
            <li><code>Vue 2 + Options API</code></li>
            <li><code>Vue 2 + Composition API</code></li>
            <li><code>Vue 3 + Composition API</code></li>
            <li><code>React 17 + Hooks</code></li>
            <li><code>React 18 + Hooks</code></li>
          </ul>
          <p>只要题目内没有限制，你可以任意使用其它库快速开发并自由发挥。</p>
          <el-skeleton v-if="isLoadingPartTwoContent" animated />
          <el-result
            v-else-if="partTwoContentErrors.length > 0"
            icon="error"
            title="Error"
            :sub-title="partTwoContentErrors.join('<br/>')"
          />
          <el-collapse v-else accordion>
            <el-collapse-item
              v-for="(nameItem, nameIndex) of partTwoNames"
              :key="nameItem.value"
              :title="nameItem.label"
            >
              <el-tabs v-if="partTwoExtensions.length > 1">
                <el-tab-pane
                  v-for="(extensionItem, extensionIndex) of partTwoExtensions"
                  :key="extensionItem.value"
                  :label="extensionItem.label"
                >
                  <markdown-it
                    breaks
                    xhtml-out
                    typographer
                    linkify
                    html
                    :highlight="{ hljs }"
                    :source="
                      partTwoContents[nameIndex * partTwoExtensions.length + extensionIndex] ?? ''
                    "
                  />
                </el-tab-pane>
              </el-tabs>
              <markdown-it
                v-else
                breaks
                xhtml-out
                typographer
                linkify
                html
                :highlight="{ hljs }"
                :source="partTwoContents[nameIndex] ?? ''"
              />
            </el-collapse-item>
          </el-collapse>
          <h4 class="text-xl font-medium">第三部分</h4>
          <p>
            在第三部分，请选择最少 1
            个题目设计与实现，形式可以是纯代码，纯文字，或代码和文字结合，完成每一个题目对应一个文件夹提交。
          </p>
          <el-skeleton v-if="isLoadingPartThreeContent" animated />
          <el-result
            v-else-if="partThreeContentErrors.length > 0"
            icon="error"
            title="Error"
            :sub-title="partThreeContentErrors.join('<br/>')"
          />
          <el-collapse v-else accordion>
            <el-collapse-item
              v-for="(nameItem, nameIndex) of partThreeNames"
              :key="nameItem.value"
              :title="nameItem.label"
            >
              <el-tabs v-if="partThreeExtensions.length > 1">
                <el-tab-pane
                  v-for="(extensionItem, extensionIndex) of partThreeExtensions"
                  :key="extensionItem.value"
                  :label="extensionItem.label"
                >
                  <markdown-it
                    breaks
                    xhtml-out
                    typographer
                    linkify
                    html
                    :highlight="{ hljs }"
                    :source="
                      partThreeContents[nameIndex * partThreeExtensions.length + extensionIndex] ??
                      ''
                    "
                  />
                </el-tab-pane>
              </el-tabs>
              <markdown-it
                v-else
                breaks
                xhtml-out
                typographer
                linkify
                html
                :highlight="{ hljs }"
                :source="partThreeContents[nameIndex] ?? ''"
              />
            </el-collapse-item>
          </el-collapse>
        </el-space>
      </el-main>
      <el-backtop />
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts">
// 我知道怎么优化，但是我想拿来让别人练手，所以这里就这样
import pkg from '@/../package.json';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { useQueries } from 'vue-query';
import { reactive, computed } from 'vue';
import { saveAs } from 'file-saver';
// @ts-ignore
import MarkdownIt from 'vue3-markdown-it';
import hljs from 'highlight.js';
import hljsJavaScript from 'highlight.js/lib/languages/javascript';
import hljsTypeScript from 'highlight.js/lib/languages/typescript';
import hljsMarkdown from 'highlight.js/lib/languages/markdown';

hljs.registerLanguage('javascript', hljsJavaScript);
hljs.registerLanguage('typescript', hljsTypeScript);
hljs.registerLanguage('markdown', hljsMarkdown);

const partOneNames = reactive([
  { label: '数组元素求和', value: 'arraySum' },
  { label: '十六进制字符串字符求和', value: 'stringSum' },
  { label: '去除字符串两边子串', value: 'stringTrim' },
  { label: '二维数组转换成对象', value: 'arrayToObject' },
  { label: '对象转换成二维数组', value: 'objectToArray' },
  { label: '生成唯一 ID', value: 'uniqueId' },
  { label: '数组去重', value: 'arrayDeduplication' },
  { label: '对象拷贝', value: 'objectClone' },
]);
const partOneExtensions = reactive([
  { label: 'typescript', value: 'ts' },
  { label: 'javascript', value: 'js' },
]);
const partTwoNames = reactive([
  { label: 'fetch', value: 'fetch' },
  { label: 'EventBus', value: 'event-bus' },
  { label: '备忘录', value: 'memo' },
  { label: '扫雷', value: 'mine-sweeper' },
  { label: '俄罗斯方块', value: 'tetris' },
  { label: '2048', value: '2048' },
  { label: '按钮', value: 'button' },
]);
const partTwoExtensions = reactive([{ label: 'markdown', value: 'md' }]);
const partThreeNames = reactive([
  { label: '请求', value: 'request' },
  { label: '渲染', value: 'render' },
  { label: '异常', value: 'exception' },
]);
const partThreeExtensions = reactive([{ label: 'markdown', value: 'md' }]);

const fetchContent = async (name: string, extension: string) => {
  try {
    const response = await fetch(`/${name}.${extension}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch /${name}.${extension}. Status: ${response.status}. StatusText: ${response.statusText}.`.replace(
          /\.+/g,
          '.',
        ),
      );
    }
    return await response.text();
  } catch (error: any) {
    throw new Error(
      `Failed to fetch /${name}.${extension}. Message: ${error.message}.`.replace(/\.+/g, '.'),
    );
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const downloadContent = (name: string, extension: string) => {
  saveAs(`/${name}.${extension}`, `${name}.${extension}`);
};

const partOneContentQueries = useQueries(
  computed(() =>
    partOneNames.flatMap((nameItem) =>
      partOneExtensions.map((extensionItem) => ({
        queryKey: [nameItem, extensionItem],
        queryFn: () => fetchContent(nameItem.value, extensionItem.value),
      })),
    ),
  ),
);
const isLoadingPartOneContent = computed(() =>
  partOneContentQueries.some((query) => query.isLoading),
);
const partOneContentErrors = computed(() => [
  ...new Set(
    partOneContentQueries
      .map((query) => (query.error as any)?.message ?? query.error)
      .filter((item) => !!item),
  ),
]);
const partOneContents = computed(() =>
  partOneContentQueries.map((query, index) =>
    partOneExtensions[index % partOneExtensions.length].value === 'md'
      ? query.data
      : `~~~${partOneExtensions[index % partOneExtensions.length].value}\n${query.data}\n~~~`,
  ),
);
const partTwoContentQueries = useQueries(
  computed(() =>
    partTwoNames.flatMap((nameItem) =>
      partTwoExtensions.map((extensionItem) => ({
        queryKey: [nameItem, extensionItem],
        queryFn: () => fetchContent(nameItem.value, extensionItem.value),
      })),
    ),
  ),
);
const isLoadingPartTwoContent = computed(() =>
  partTwoContentQueries.some((query) => query.isLoading),
);
const partTwoContentErrors = computed(() => [
  ...new Set(
    partTwoContentQueries
      .map((query) => (query.error as any)?.message ?? query.error)
      .filter((item) => !!item),
  ),
]);
const partTwoContents = computed(() =>
  partTwoContentQueries.map((query, index) =>
    partTwoExtensions[index % partTwoExtensions.length].value === 'md'
      ? query.data
      : `~~~${partTwoExtensions[index % partTwoExtensions.length].value}\n${query.data}\n~~~`,
  ),
);
const partThreeContentQueries = useQueries(
  computed(() =>
    partThreeNames.flatMap((nameItem) =>
      partThreeExtensions.map((extensionItem) => ({
        queryKey: [nameItem, extensionItem],
        queryFn: () => fetchContent(nameItem.value, extensionItem.value),
      })),
    ),
  ),
);
const isLoadingPartThreeContent = computed(() =>
  partThreeContentQueries.some((query) => query.isLoading),
);
const partThreeContentErrors = computed(() => [
  ...new Set(
    partThreeContentQueries
      .map((query) => (query.error as any)?.message ?? query.error)
      .filter((item) => !!item),
  ),
]);
const partThreeContents = computed(() =>
  partThreeContentQueries.map((query, index) =>
    partThreeExtensions[index % partThreeExtensions.length].value === 'md'
      ? query.data
      : `~~~${partThreeExtensions[index % partThreeExtensions.length].value}\n${query.data}\n~~~`,
  ),
);
</script>
