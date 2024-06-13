// 一个路由模块，用于处理文件相关的路由
import type { RouteRecordRaw } from "vue-router";

const filesRoutes: RouteRecordRaw[] = [
    {
        path: '/files',
        component: () => import('@/layout/AppLayout.vue'),
        children: [
            {
                path: '/files/upload',
                component: () => import('@/views/files/UploadIndex.vue'),
                name: 'files'
            }
        ]
    },
]

export default filesRoutes
