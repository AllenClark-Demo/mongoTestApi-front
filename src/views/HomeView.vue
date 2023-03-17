<template>
  <el-container style="min-height: 100vh">

    <el-aside :width="sideWidth + 'px'" style="box-shadow: 2px 0 6px rgb(0 21 41 / 35%);">
      <el-menu :default-openeds="['1', '3']" style="min-height: 100%; overflow-x: hidden"
               background-color="rgb(48, 65, 86)"
               text-color="#fff"
               active-text-color="#ffd04b"
               :collapse-transition="false"
               :collapse="isCollapse"
      >
	  
        <div style="height: 60px; line-height: 60px; text-align: center">
          <img src="../assets/logo.png" alt="" style="width: 20px; position: relative; top: 5px; right: 5px">
          <b style="color: white" v-show="logoTextShow">我测你们码</b>
        </div>
		<!--
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </template>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </template>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>-->
      </el-menu>
    </el-aside>

    <el-container>
	
      <el-header style="font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex">
        <div style="flex: 1; font-size: 20px">
          <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
        </div>
		<!--
        <el-dropdown style="width: 70px; cursor: pointer">
          <span>王小虎</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item style="font-size: 14px; padding: 5px 0">个人信息</el-dropdown-item>
            <el-dropdown-item style="font-size: 14px; padding: 5px 0">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>-->

      </el-header>

      <el-main>
        <div style="margin-bottom: 30px">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>信息展示</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div style="margin: 10px 0">
          <el-input style="width: 200px" placeholder="请输入名称" suffix-icon="el-icon-search"></el-input>
          <el-input style="width: 200px" placeholder="请输入邮箱" suffix-icon="el-icon-message" class="ml-5"></el-input>
          <el-input style="width: 200px" placeholder="请输入地址" suffix-icon="el-icon-position" class="ml-5"></el-input>
          <el-button class="ml-5" type="primary">搜索</el-button>
        </div>

        <div style="margin: 10px 0">
          <!--<el-button type="primary">新增 <i class="el-icon-circle-plus-outline"></i></el-button>
          <el-button type="danger">批量删除 <i class="el-icon-remove-outline"></i></el-button>-->
          <el-button @click="getData" type="primary">获取数据 <i class="el-icon-bottom"></i></el-button>
          <el-button @click="showData" type="primary" >显示数据 <i class="el-icon-top"></i></el-button>
        </div>

        <el-table :data="tableData" border stripe :header-cell-class-name="headerBg">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
          <el-table-column label="操作"  width="200" align="center">
            <!--<template slot-scope="scope">
              <el-button type="success">编辑 <i class="el-icon-edit"></i></el-button>
              <el-button type="danger">删除 <i class="el-icon-remove-outline"></i></el-button>
            </template>-->
          </el-table-column>
        </el-table>
        <div style="padding: 10px 0">
          <el-pagination

              :page-sizes="[5, 10, 15, 20]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
          </el-pagination>
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(5).fill(item),
        msg: "hello ",
        collapseBtnClass: 'el-icon-s-fold',
        isCollapse: false,
        sideWidth: 200,
        logoTextShow: true,
        headerBg: 'headerBg'
      }
    },
    methods: {
      collapse() {  // 点击收缩按钮触发
        this.isCollapse = !this.isCollapse
        if (this.isCollapse) {  // 收缩
          this.sideWidth = 64
          this.collapseBtnClass = 'el-icon-s-unfold'
          this.logoTextShow = false
        } else {   // 展开
          this.sideWidth = 200
          this.collapseBtnClass = 'el-icon-s-fold'
          this.logoTextShow = true
        }
      },
	  getData(){	//获取后端数据
		//axios.get('http://127.0.0.1:9090/getJoke')
		axios.get(this.HOST+"/getJoke")
		        .then(response => {
		          console.log(response.data);
		        })
		        .catch(error => {
		          console.error(error);
		        });
	  },
	  showData(){	//显示后端数据
		  axios.post(this.HOST+"/showJoke", {
		      firstName: 'Fred',        // 参数 firstName
		      lastName: 'Flintstone'    // 参数 lastName
		    })
		    .then(function (response) {
		      console.log(response);
		    })
		    .catch(function (error) {
		      console.log(error);
		    });
	  }
    }
  }
</script>
  
<style>
.headerBg {
	background: #eee!important;
  }
</style>